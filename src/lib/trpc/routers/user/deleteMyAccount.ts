import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const deleteMyAccount = authProcedure.mutation(async ({ ctx }) => {
	const { id } = ctx.session.user;
	await prisma.user.delete({ where: { id } });
});
