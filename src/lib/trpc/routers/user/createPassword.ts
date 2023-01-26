import { prisma } from '$lib/server/singletons';
import { hashPassword } from '$lib/server/utils';
import { authProcedure } from '$lib/trpc/t';
import { z } from 'zod';

export const createPassword = authProcedure.input(z.string()).mutation(async ({ ctx, input }) => {
	const { id } = ctx.session.user;

	await prisma.user.update({
		where: { id },
		data: {
			password: await hashPassword(input)
		}
	});
});
