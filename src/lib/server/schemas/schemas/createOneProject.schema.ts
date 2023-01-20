import { z } from 'zod';
import { ProjectCreateInputObjectSchema } from './objects/ProjectCreateInput.schema';
import { ProjectUncheckedCreateInputObjectSchema } from './objects/ProjectUncheckedCreateInput.schema';

export const ProjectCreateOneSchema = z.object({
	data: z.union([ProjectCreateInputObjectSchema, ProjectUncheckedCreateInputObjectSchema])
});
