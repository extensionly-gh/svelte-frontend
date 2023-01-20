import { z } from 'zod';
import { ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema';

export const ActivityFindFirstSchema = z.object({
	orderBy: z
		.union([
			ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: ActivityWhereInputObjectSchema.optional(),
	cursor: ActivityWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ActivityScalarFieldEnumSchema).optional()
});
