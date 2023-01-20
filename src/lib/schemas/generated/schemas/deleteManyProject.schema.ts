import { z } from 'zod';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';

export const ProjectDeleteManySchema = z.object({
	where: ProjectWhereInputObjectSchema.optional()
});
