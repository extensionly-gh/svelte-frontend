import { publicProcedure } from '$lib/trpc/t';
import { prisma } from '$lib/server/singletons';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { z } from 'zod';

export const createVerification = publicProcedure
	.input(
		z.object({
			type: z.enum(['VALIDATE_EMAIL', 'VALIDATE_PHONE', 'RESET_PASSWORD']),
			email: z.string().email('validations.email.invalid')
		})
	)
	.mutation(async ({ input }) => {
		const user = await prisma.user.findUniqueOrThrow({
			where: { email: input.email }
		});

		const verifications = await prisma.verification.findMany({
			where: {
				userId: user.id,
				type: input.type
			}
		});

		if (verifications.find((v) => v.isVerified)) {
			throw new TRPCError({
				message: `exceptions.users.verifications.${input.type.toLowerCase()}.already-verified`,
				code: 'BAD_REQUEST'
			});
		}

		const nowMinusFifteenMinutes = DateTime.now().minus({ minutes: 15 }).toJSDate();

		const expired = verifications.filter((v) => {
			return v.createdAt <= nowMinusFifteenMinutes;
		});

		if (verifications.length > 0 && expired.length > 0) {
			await prisma.verification.deleteMany({
				where: {
					userId: user.id,
					type: input.type,
					isVerified: false,
					createdAt: {
						lte: nowMinusFifteenMinutes
					}
				}
			});
		}

		const pendingVerification = verifications.find((v) => v.createdAt > nowMinusFifteenMinutes);
		const liftCooldownAt = DateTime.now().plus({ minutes: 5 }).toJSDate();

		if (pendingVerification) {
			const isCooldownLifted =
				DateTime.fromJSDate(pendingVerification.liftCooldownAt).diffNow('minutes').minutes <= 0;

			if (!isCooldownLifted) {
				throw new TRPCError({
					message: `exceptions.users.verifications.${input.type.toLowerCase()}.cooldown-not-lifted`,
					code: 'BAD_REQUEST'
				});
			}

			await prisma.verification.update({
				data: {
					liftCooldownAt
				},
				where: {
					id: pendingVerification.id
				}
			});

			return pendingVerification;
		}

		const verification = await prisma.verification.create({
			data: {
				userId: user.id,
				type: input.type,
				liftCooldownAt
			}
		});

		return verification;
	});
