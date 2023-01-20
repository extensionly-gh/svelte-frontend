import { z } from 'zod';
import { ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';
import { ActivityOrderByWithAggregationInputObjectSchema } from './objects/ActivityOrderByWithAggregationInput.schema';
import { ActivityScalarWhereWithAggregatesInputObjectSchema } from './objects/ActivityScalarWhereWithAggregatesInput.schema';
import { ActivityScalarFieldEnumSchema } from './enums/ActivityScalarFieldEnum.schema';

export const ActivityGroupBySchema = z.object({
	where: ActivityWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			ActivityOrderByWithAggregationInputObjectSchema,
			ActivityOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: ActivityScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ActivityScalarFieldEnumSchema)
});
