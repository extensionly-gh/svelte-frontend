import { z } from 'zod';
import { ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityCountAggregateInputObjectSchema } from './objects/ActivityCountAggregateInput.schema';
import { ActivityMinAggregateInputObjectSchema } from './objects/ActivityMinAggregateInput.schema';
import { ActivityMaxAggregateInputObjectSchema } from './objects/ActivityMaxAggregateInput.schema';

export const ActivityAggregateSchema = z.object({
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
	_count: z.union([z.literal(true), ActivityCountAggregateInputObjectSchema]).optional(),
	_min: ActivityMinAggregateInputObjectSchema.optional(),
	_max: ActivityMaxAggregateInputObjectSchema.optional()
});
