import { z } from 'zod';
import { UserInstructorWhereInputObjectSchema } from './objects/UserInstructorWhereInput.schema';
import { UserInstructorOrderByWithAggregationInputObjectSchema } from './objects/UserInstructorOrderByWithAggregationInput.schema';
import { UserInstructorScalarWhereWithAggregatesInputObjectSchema } from './objects/UserInstructorScalarWhereWithAggregatesInput.schema';
import { UserInstructorScalarFieldEnumSchema } from './enums/UserInstructorScalarFieldEnum.schema';

export const UserInstructorGroupBySchema = z.object({
	where: UserInstructorWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			UserInstructorOrderByWithAggregationInputObjectSchema,
			UserInstructorOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: UserInstructorScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(UserInstructorScalarFieldEnumSchema)
});
