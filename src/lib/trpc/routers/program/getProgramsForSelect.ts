import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getProgramsForSelect = publicProcedure.query(async () => {
	return await prisma.program.findMany({
		select: {
			id: true,
			title: true
		},
		orderBy: {
			title: 'asc'
		}
	});
});
