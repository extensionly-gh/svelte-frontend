import { createUserSchema, passwordUpdateSchema, userUpdateSchema } from '$lib/schemas';
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
		.mutation(async ({ ctx, input }) => {
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
	checkVerification: publicProcedure
		.input(
			z.object({
				id: z.string()
			})
		)
		.query(async ({ input }) => {
			const verification = await prisma.verification.findUniqueOrThrow({
				where: { id: input.id }
			});

			const user = await prisma.user.findUnique({
				where: { email: verification.userId }
			});

			return user;
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

			if (user) {
				const verification = await appRouter.createCaller(ctx).user.createVerification({
					type: 'RESET_PASSWORD',
					email: input.email
				});

				const builtEmail = buildEmail({
					type: 'reset_password',
					toEmail: input.email,
					recipientName: user.name,
					url: input.url,
					token: verification.id
				});
				console.log(builtEmail);

				sendInBlueApi.sendTransacEmail(builtEmail).then(
					function (data: any) {
						console.log('API called successfully. Returned data: ' + JSON.stringify(data));
					},
					function (error: any) {
						console.error(error);
					}
				);
			} else {
				throw new TRPCError({
					message: `TESTE`,
					code: 'BAD_REQUEST'
				});
			}
		})
});
