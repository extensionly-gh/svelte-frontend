import { prisma } from '$lib/server/singletons';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { authProcedure, publicProcedure, router } from '$lib/trpc/t';
import { z } from 'zod';

export const userRouter = router({
	update: authProcedure
		.input(
			z.object({
				name: z.string().min(3, 'validations.string.min').max(255, 'validations.string.max'),
				email: z.string().email('validations.email.invalid'),
				phone: z.string().min(10, 'validations.string.min').max(10, 'validations.string.max')
			})
		)
		.mutation(async ({ ctx, input }) => {
			const { id } = ctx.session.user;

			const user = await prisma.user.update({
				where: { id },
				data: {
					...input
				}
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
	}),
	userExists: publicProcedure
		.input(
			z.object({
				email: z.string().email('validations.email.invalid')
			})
		)
		.query(async ({ input }) => {
			const user = await prisma.user.findUnique({
				where: { email: input.email }
			});

			if (!user) {
				throw new TRPCError({
					message: `teste`,
					code: 'BAD_REQUEST'
				});
			}

			return true;
		})
});
