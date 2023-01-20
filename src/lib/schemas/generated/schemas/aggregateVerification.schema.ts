import { z } from 'zod';
import { VerificationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/VerificationOrderByWithRelationAndSearchRelevanceInput.schema';
import { VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationCountAggregateInputObjectSchema } from './objects/VerificationCountAggregateInput.schema';
import { VerificationMinAggregateInputObjectSchema } from './objects/VerificationMinAggregateInput.schema';
import { VerificationMaxAggregateInputObjectSchema } from './objects/VerificationMaxAggregateInput.schema';

export const VerificationAggregateSchema = z.object({
	orderBy: z
		.union([
			VerificationOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			VerificationOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: VerificationWhereInputObjectSchema.optional(),
	cursor: VerificationWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), VerificationCountAggregateInputObjectSchema]).optional(),
	_min: VerificationMinAggregateInputObjectSchema.optional(),
	_max: VerificationMaxAggregateInputObjectSchema.optional()
});
