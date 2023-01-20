import { z } from 'zod';
import { UserInstructorOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/UserInstructorOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserInstructorWhereInputObjectSchema } from './objects/UserInstructorWhereInput.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';
import { UserInstructorCountAggregateInputObjectSchema } from './objects/UserInstructorCountAggregateInput.schema';
import { UserInstructorMinAggregateInputObjectSchema } from './objects/UserInstructorMinAggregateInput.schema';
import { UserInstructorMaxAggregateInputObjectSchema } from './objects/UserInstructorMaxAggregateInput.schema';

export const UserInstructorAggregateSchema = z.object({
	orderBy: z
		.union([
			UserInstructorOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			UserInstructorOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: UserInstructorWhereInputObjectSchema.optional(),
	cursor: UserInstructorWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	_count: z.union([z.literal(true), UserInstructorCountAggregateInputObjectSchema]).optional(),
	_min: UserInstructorMinAggregateInputObjectSchema.optional(),
	_max: UserInstructorMaxAggregateInputObjectSchema.optional()
});
