import { z } from 'zod';
import { UserInstructorOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/UserInstructorOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserInstructorWhereInputObjectSchema } from './objects/UserInstructorWhereInput.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';
import { UserInstructorScalarFieldEnumSchema } from './enums/UserInstructorScalarFieldEnum.schema';

export const UserInstructorFindFirstSchema = z.object({
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
	distinct: z.array(UserInstructorScalarFieldEnumSchema).optional()
});
