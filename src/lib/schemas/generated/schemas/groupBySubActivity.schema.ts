import { z } from 'zod';
import { SubActivityWhereInputObjectSchema } from './objects/SubActivityWhereInput.schema';
import { SubActivityOrderByWithAggregationInputObjectSchema } from './objects/SubActivityOrderByWithAggregationInput.schema';
import { SubActivityScalarWhereWithAggregatesInputObjectSchema } from './objects/SubActivityScalarWhereWithAggregatesInput.schema';
import { SubActivityScalarFieldEnumSchema } from './enums/SubActivityScalarFieldEnum.schema';

export const SubActivityGroupBySchema = z.object({
	where: SubActivityWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			SubActivityOrderByWithAggregationInputObjectSchema,
			SubActivityOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: SubActivityScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(SubActivityScalarFieldEnumSchema)
});
