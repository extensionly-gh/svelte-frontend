import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getFaculties = publicProcedure.query(async () => {
	const faculties = await prisma.faculty.findMany({
		orderBy: {
			acronym: 'asc'
		}
	});
	return faculties;
});
