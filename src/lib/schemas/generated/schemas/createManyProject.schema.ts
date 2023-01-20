import { z } from 'zod';
import { ProjectCreateManyInputObjectSchema } from './objects/ProjectCreateManyInput.schema';

export const ProjectCreateManySchema = z.object({
	data: z.union([ProjectCreateManyInputObjectSchema, z.array(ProjectCreateManyInputObjectSchema)])
});
