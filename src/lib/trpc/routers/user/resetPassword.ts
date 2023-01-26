import { passwordResetSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { hashPassword } from '$lib/server/utils';
import { appRouter } from '$lib/trpc/router';
import { publicProcedure } from '$lib/trpc/t';

export const resetPassword = publicProcedure
	.input(passwordResetSchema)
	.mutation(async ({ ctx, input }) => {
		const verificationWithUser = await appRouter
			.createCaller(ctx)
			.verification.validateVerification({
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
	});
