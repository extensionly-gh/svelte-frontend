import { z } from 'zod';
import { VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
import { VerificationOrderByWithAggregationInputObjectSchema } from './objects/VerificationOrderByWithAggregationInput.schema';
import { VerificationScalarWhereWithAggregatesInputObjectSchema } from './objects/VerificationScalarWhereWithAggregatesInput.schema';
import { VerificationScalarFieldEnumSchema } from './enums/VerificationScalarFieldEnum.schema';

export const VerificationGroupBySchema = z.object({
	where: VerificationWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			VerificationOrderByWithAggregationInputObjectSchema,
			VerificationOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: VerificationScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(VerificationScalarFieldEnumSchema)
});
