import { prisma } from '$lib/server/singletons';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { authProcedure, router } from '$lib/trpc/t';
import { z } from 'zod';
import { userUpdateSchema } from '$lib/schemas';

export const userRouter = router({
	getUpdatableProperties: authProcedure.query(async ({ ctx }) => {
		const { id } = ctx.session.user;

		const user = await prisma.user.findUniqueOrThrow({
			where: { id },
			select: {
				name: true,
				email: true,
				phone: true,
				image: true
			}
		});

		return user;
	}),
	setUpdatableProperties: authProcedure
		.input(userUpdateSchema)
		.mutation(async ({ ctx, input }) => {
			const { id } = ctx.session.user;

			const user = await prisma.user.update({
				where: { id },
				data: input
			});

			return user;
		}),
	createVerification: authProcedure
		.input(
			z.object({
				type: z.enum(['VALIDATE_EMAIL', 'VALIDATE_PHONE', 'RESET_PASSWORD'])
			})
		)
		.mutation(async ({ ctx, input }) => {
			const verifications = await prisma.verification.findMany({
				where: {
					userId: ctx.session.user.id,
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
						userId: ctx.session.user.id,
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
					userId: ctx.session.user.id,
					type: input.type,
					liftCooldownAt
				}
			});

			return verification;
		}),
	getVerifications: authProcedure.query(async ({ ctx }) => {
		const user = await prisma.user.findUnique({
			where: {
				id: ctx.session.user.id
			},
			select: {
				Verification: true
			}
		});

		return user?.Verification;
	})
});
