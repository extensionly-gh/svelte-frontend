import { z } from 'zod';
import { SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/SubActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { SubActivityWhereInputObjectSchema } from './objects/SubActivityWhereInput.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';
import { SubActivityCountAggregateInputObjectSchema } from './objects/SubActivityCountAggregateInput.schema';
import { SubActivityMinAggregateInputObjectSchema } from './objects/SubActivityMinAggregateInput.schema';
import { SubActivityMaxAggregateInputObjectSchema } from './objects/SubActivityMaxAggregateInput.schema';

export const SubActivityAggregateSchema = z.object({
	orderBy: z
		.union([
			SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: SubActivityWhereInputObjectSchema.optional(),
	cursor: SubActivityWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), SubActivityCountAggregateInputObjectSchema]).optional(),
	_min: SubActivityMinAggregateInputObjectSchema.optional(),
	_max: SubActivityMaxAggregateInputObjectSchema.optional()
});
