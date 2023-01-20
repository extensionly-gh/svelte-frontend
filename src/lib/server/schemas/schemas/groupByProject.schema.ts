import { z } from 'zod';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectOrderByWithAggregationInputObjectSchema } from './objects/ProjectOrderByWithAggregationInput.schema';
import { ProjectScalarWhereWithAggregatesInputObjectSchema } from './objects/ProjectScalarWhereWithAggregatesInput.schema';
import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema';

export const ProjectGroupBySchema = z.object({
	where: ProjectWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			ProjectOrderByWithAggregationInputObjectSchema,
			ProjectOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: ProjectScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ProjectScalarFieldEnumSchema)
});
