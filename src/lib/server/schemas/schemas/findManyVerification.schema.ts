import { z } from 'zod';
import { VerificationOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/VerificationOrderByWithRelationAndSearchRelevanceInput.schema';
import { VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationScalarFieldEnumSchema } from './enums/VerificationScalarFieldEnum.schema';

export const VerificationFindManySchema = z.object({
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
	distinct: z.array(VerificationScalarFieldEnumSchema).optional()
});
