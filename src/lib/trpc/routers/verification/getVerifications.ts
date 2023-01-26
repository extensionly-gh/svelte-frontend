import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const getVerifications = authProcedure.query(async ({ ctx }) => {
	const user = await prisma.user.findUnique({
		where: {
			id: ctx.session.user.id
		},
		select: {
			Verification: true
		}
	});

	return user?.Verification;
});
