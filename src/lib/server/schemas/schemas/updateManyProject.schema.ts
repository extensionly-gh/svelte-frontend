import { z } from 'zod';
import { ProjectUpdateManyMutationInputObjectSchema } from './objects/ProjectUpdateManyMutationInput.schema';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';

export const ProjectUpdateManySchema = z.object({
	data: ProjectUpdateManyMutationInputObjectSchema,
	where: ProjectWhereInputObjectSchema.optional()
});
