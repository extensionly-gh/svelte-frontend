import { createProjectSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const createProgram = authProcedure
	.input(createProjectSchema)
	.mutation(async ({ input }) => {
		await prisma.project.create({
			data: {
				title: input.title,
				description: input.description,
				visibility: input.visibility,
				acceptStudentsProposals: input.acceptStudentsProposals,
				Program: {
					connect: {
						id: input.programId
					}
				},
				Faculty: {
					connect: {
						id: input.facultyId
					}
				}
			}
		});
	});
