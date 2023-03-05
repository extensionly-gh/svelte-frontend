import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getFaculties = publicProcedure.query(async () => {
	await new Promise((resolve) => setTimeout(resolve, 10000));
	const faculties = await prisma.faculty.findMany({
		orderBy: {
			acronym: 'asc'
		}
	});
	return faculties;
});
