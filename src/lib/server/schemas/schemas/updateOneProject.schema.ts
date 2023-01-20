import { z } from 'zod';
import { ProjectUpdateInputObjectSchema } from './objects/ProjectUpdateInput.schema';
import { ProjectUncheckedUpdateInputObjectSchema } from './objects/ProjectUncheckedUpdateInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectUpdateOneSchema = z.object({
	data: z.union([ProjectUpdateInputObjectSchema, ProjectUncheckedUpdateInputObjectSchema]),
	where: ProjectWhereUniqueInputObjectSchema
});
