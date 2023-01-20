import { z } from 'zod';
import { UserEnrollmentsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/UserEnrollmentsOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserEnrollmentsWhereInputObjectSchema } from './objects/UserEnrollmentsWhereInput.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsCountAggregateInputObjectSchema } from './objects/UserEnrollmentsCountAggregateInput.schema';
import { UserEnrollmentsMinAggregateInputObjectSchema } from './objects/UserEnrollmentsMinAggregateInput.schema';
import { UserEnrollmentsMaxAggregateInputObjectSchema } from './objects/UserEnrollmentsMaxAggregateInput.schema';

export const UserEnrollmentsAggregateSchema = z.object({
	orderBy: z
		.union([
			UserEnrollmentsOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			UserEnrollmentsOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: UserEnrollmentsWhereInputObjectSchema.optional(),
	cursor: UserEnrollmentsWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), UserEnrollmentsCountAggregateInputObjectSchema]).optional(),
	_min: UserEnrollmentsMinAggregateInputObjectSchema.optional(),
	_max: UserEnrollmentsMaxAggregateInputObjectSchema.optional()
});
