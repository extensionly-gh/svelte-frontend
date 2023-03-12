import { createProjectSchema } from '$lib/schemas';
import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';
import type { Prisma } from '@prisma/client';

export const createProject = authProcedure
	.input(createProjectSchema)
	.mutation(async ({ input }) => {
		const data: Prisma.ProjectCreateInput = {
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
		};

		if (input.programId === '-1') {
			delete data.Program;
		}

		await prisma.project.create({
			data
		});
	});
