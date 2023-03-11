import { prisma } from '$lib/server/singletons';
import { publicProcedure } from '$lib/trpc/t';

export const getProgramsForSelect = publicProcedure.query(async () => {
	const programs = await prisma.program.findMany({
		select: {
			id: true,
			title: true,
			visibility: true,
			Faculty: {
				select: {
					id: true,
					acronym: true
				}
			}
		},
		orderBy: {
			createdAt: 'desc'
		}
	});

	return programs.map((program) => ({
		id: program.id,
		title: `${program.Faculty.acronym} | ${program.title}`,
		visibility: program.visibility,
		facultyId: program.Faculty.id
	}));
});
