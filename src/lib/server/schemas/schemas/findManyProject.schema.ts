import { z } from 'zod';
import { ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ProjectOrderByWithRelationAndSearchRelevanceInput.schema';
import { ProjectWhereInputObjectSchema } from './objects/ProjectWhereInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';
import { ProjectScalarFieldEnumSchema } from './enums/ProjectScalarFieldEnum.schema';

export const ProjectFindManySchema = z.object({
	orderBy: z
		.union([
			ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: ProjectWhereInputObjectSchema.optional(),
	cursor: ProjectWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ProjectScalarFieldEnumSchema).optional()
});
