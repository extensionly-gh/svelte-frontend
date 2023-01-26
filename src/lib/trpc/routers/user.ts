import {
	createUserSchema,
	passwordResetSchema,
	passwordUpdateSchema,
	userUpdateSchema,
	validateEmailSchema,
	validateVerificationTokenSchema
} from '$lib/schemas';
import { prisma, sendInBlueApi } from '$lib/server/singletons';
import { comparePassword, hashPassword } from '$lib/server/utils';
import { buildEmail } from '$lib/server/utils/email.utils';
import { authProcedure, publicProcedure, router } from '$lib/trpc/t';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { TRPCError } from '@trpc/server';
import { DateTime } from 'luxon';
import { z } from 'zod';
import { appRouter } from '../router';

export const userRouter = router({
	deleteMyAccount: authProcedure.mutation(async ({ ctx }) => {
		const { id } = ctx.session.user;
		await prisma.user.delete({ where: { id } });
	}),
	getAccountData: authProcedure.query(async ({ ctx }) => {
		const { id } = ctx.session.user;

		const user = await prisma.user.findUniqueOrThrow({
			where: { id },
			select: {
				name: true,
				email: true,
				phone: true,
				image: true,
				password: true,
				Verification: {
					select: {
						type: true,
						isVerified: true,
						liftCooldownAt: true
					}
				}
			}
		});
		const isPasswordEmpty = user.password === null;
		// @ts-expect-error - we don't want to send the password to the client
		delete user.password;

		return {
			...user,
			isPasswordEmpty
		};
	}),
	createPassword: authProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
		const { id } = ctx.session.user;

		await prisma.user.update({
			where: { id },
			data: {
				password: await hashPassword(input)
			}
		});
	}),
	updatePassword: authProcedure.input(passwordUpdateSchema).mutation(async ({ ctx, input }) => {
		const { id } = ctx.session.user;

		const { password: hashedPwd } = await prisma.user.findUniqueOrThrow({
			where: { id },
			select: {
				password: true
			}
		});

		if (!hashedPwd) {
			throw new TRPCError({
				message: 'exceptions.users.password.no-password',
				code: 'BAD_REQUEST'
			});
		}

		if (!(await comparePassword(input.currentPwd, hashedPwd))) {
			throw new TRPCError({
				message: 'exceptions.users.password.incorrect-current',
				code: 'BAD_REQUEST'
			});
		}

		await prisma.user.update({
			where: { id },
			data: {
				password: await hashPassword(input.newPwd)
			}
		});
	}),
	createUser: publicProcedure.input(createUserSchema).mutation(async ({ input }) => {
		try {
			await prisma.user.create({
				data: {
					...input,
					password: await hashPassword(input.password)
				}
			});
		} catch (error) {
			if (error instanceof PrismaClientKnownRequestError) {
				// P2002 is the error code for unique constraint violations
				if (error.code === 'P2002') {
					throw new TRPCError({
						message: 'exceptions.users.email-already-in-use',
						code: 'BAD_REQUEST'
					});
				}
			}
		}
	}),
	updateUser: authProcedure.input(userUpdateSchema).mutation(async ({ ctx, input }) => {
		const { id } = ctx.session.user;

		const user = await prisma.user.update({
			where: { id },
			data: input
		});

		return user;
	}),
	createVerification: publicProcedure
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
	validateVerificationToken: publicProcedure
		.input(validateVerificationTokenSchema)
		.mutation(async ({ input }) => {
			const verificationWithUser = await prisma.verification.findUnique({
				include: {
					user: true
				},
				where: { id: input.token }
			});

			if (!verificationWithUser) {
				throw new TRPCError({
					message: `v-password.invalid-token`,
					code: 'BAD_REQUEST'
				});
			}

			if (verificationWithUser.isVerified) {
				throw new TRPCError({
					message: `exceptions.users.verifications.${input.type.toLowerCase()}.already-verified`,
					code: 'BAD_REQUEST'
				});
			}

			const tokenCreationAndNowDiff = DateTime.fromJSDate(verificationWithUser.createdAt).diffNow(
				'minutes'
			);

			if (tokenCreationAndNowDiff.minutes <= -15) {
				throw new TRPCError({
					message: `exceptions.users.verifications.expired-token`,
					code: 'BAD_REQUEST'
				});
			}

			return verificationWithUser;
		}),

	resetPassword: publicProcedure.input(passwordResetSchema).mutation(async ({ ctx, input }) => {
		const verificationWithUser = await appRouter.createCaller(ctx).user.validateVerificationToken({
			type: 'RESET_PASSWORD',
			token: input.token
		});

		await prisma.user.update({
			where: { id: verificationWithUser.userId },
			data: {
				password: await hashPassword(input.newPwd)
			}
		});

		await prisma.verification.delete({
			where: {
				id: verificationWithUser.id
			}
		});
	}),
	validateEmail: publicProcedure.input(validateEmailSchema).mutation(async ({ ctx, input }) => {
		const verificationWithUser = await appRouter.createCaller(ctx).user.validateVerificationToken({
			type: 'VALIDATE_EMAIL',
			token: input.token
		});

		await prisma.verification.update({
			data: {
				isVerified: true
			},
			where: {
				id: verificationWithUser.id
			}
		});
	}),
	sendVerificationEmail: publicProcedure
		.input(
			z.object({
				email: z.string().email('validations.email.invalid'),
				url: z.string()
			})
		)
		.mutation(async ({ ctx, input }) => {
			const user = await prisma.user.findUnique({
				where: { email: input.email }
			});

			if (!user) return;

			const verification = await appRouter.createCaller(ctx).user.createVerification({
				type: 'VALIDATE_EMAIL',
				email: input.email
			});

			const email = buildEmail({
				verificationType: verification.type,
				recipientEmail: input.email,
				recipientName: user.name,
				frontendUrl: input.url,
				token: verification.id
			});

			try {
				await sendInBlueApi.sendTransacEmail({ sendSmtpEmail: email });
			} catch (error) {
				console.log('error-sending-pw-recovery-email', error);
				throw new TRPCError({
					message: `exceptions.users.error-sending-email`,
					code: 'BAD_REQUEST'
				});
			}
		}),
	sendForgotPasswordEmail: publicProcedure
		.input(
			z.object({
				email: z.string().email('validations.email.invalid'),
				url: z.string()
			})
		)
		.mutation(async ({ ctx, input }) => {
			const user = await prisma.user.findUnique({
				where: { email: input.email }
			});

			if (!user) return;

			const verification = await appRouter.createCaller(ctx).user.createVerification({
				type: 'RESET_PASSWORD',
				email: input.email
			});

			const email = buildEmail({
				verificationType: verification.type,
				recipientEmail: input.email,
				recipientName: user.name,
				frontendUrl: input.url,
				token: verification.id
			});

			try {
				await sendInBlueApi.sendTransacEmail({ sendSmtpEmail: email });
			} catch (error) {
				console.log('error-sending-pw-recovery-email', error);
				throw new TRPCError({
					message: `exceptions.users.error-sending-email`,
					code: 'BAD_REQUEST'
				});
			}
		})
});
