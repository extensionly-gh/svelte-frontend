import { z } from 'zod';
import { UserEnrollmentsWhereInputObjectSchema } from './objects/UserEnrollmentsWhereInput.schema';
import { UserEnrollmentsOrderByWithAggregationInputObjectSchema } from './objects/UserEnrollmentsOrderByWithAggregationInput.schema';
import { UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema } from './objects/UserEnrollmentsScalarWhereWithAggregatesInput.schema';
import { UserEnrollmentsScalarFieldEnumSchema } from './enums/UserEnrollmentsScalarFieldEnum.schema';

export const UserEnrollmentsGroupBySchema = z.object({
	where: UserEnrollmentsWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			UserEnrollmentsOrderByWithAggregationInputObjectSchema,
			UserEnrollmentsOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(UserEnrollmentsScalarFieldEnumSchema)
});
