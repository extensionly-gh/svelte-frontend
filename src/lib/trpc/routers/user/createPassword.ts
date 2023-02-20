import { passwordCreateSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { hashPassword } from '$lib/server/utils';
import { authProcedure } from '$lib/trpc/t';

export const createPassword = authProcedure
	.input(passwordCreateSchema)
	.mutation(async ({ ctx, input }) => {
		const { id } = ctx.session.user;

		await prisma.user.update({
			where: { id },
			data: {
				password: await hashPassword(input.newPwd)
			}
		});
	});
