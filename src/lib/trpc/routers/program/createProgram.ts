import { createProgramSchema } from '$lib/schemas/programs';
import { prisma } from '$lib/server/singletons';
import { authProcedure } from '$lib/trpc/t';

export const createProgram = authProcedure
	.input(createProgramSchema)
	.mutation(async ({ input }) => {
		await prisma.program.create({
			data: {
				title: input.title,
				description: input.description,
				visibility: input.visibility,
				Faculty: {
					connect: {
						id: input.facultyId
					}
				}
			}
		});
	});
