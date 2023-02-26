import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import { validateEmailSchema } from '$lib/schemas';
import { appRouter } from '$lib/trpc/router';

export const validateEmail = publicProcedure
	.input(validateEmailSchema)
	.mutation(async ({ ctx, input }) => {
		const verificationWithUser = await appRouter
			.createCaller(ctx)
			.verification.checkVerificationByToken({
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
	});
