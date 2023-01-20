import { z } from 'zod';
import { UserEnrollmentsOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/UserEnrollmentsOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserEnrollmentsWhereInputObjectSchema } from './objects/UserEnrollmentsWhereInput.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsScalarFieldEnumSchema } from './enums/UserEnrollmentsScalarFieldEnum.schema';

export const UserEnrollmentsFindManySchema = z.object({
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
	distinct: z.array(UserEnrollmentsScalarFieldEnumSchema).optional()
});
