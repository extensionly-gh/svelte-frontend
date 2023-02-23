import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';
import { z } from 'zod';

export const getUserByToken = publicProcedure
	.input(
		z.object({
			token: z.string()
		})
	)
	.query(async ({ input }) => {
		const { user } = await prisma.verification.findFirstOrThrow({
			where: {
				id: input.token
			},
			select: {
				user: true
			}
		});

		return user.email;
	});
