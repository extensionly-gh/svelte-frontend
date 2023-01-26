import { userUpdateSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const updateUser = authProcedure.input(userUpdateSchema).mutation(async ({ ctx, input }) => {
	const { id } = ctx.session.user;

	const user = await prisma.user.update({
		where: { id },
		data: input
	});

	return user;
});
