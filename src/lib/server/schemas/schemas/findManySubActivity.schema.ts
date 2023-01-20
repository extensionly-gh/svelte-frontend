import { z } from 'zod';
import { SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/SubActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { SubActivityWhereInputObjectSchema } from './objects/SubActivityWhereInput.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';
import { SubActivityScalarFieldEnumSchema } from './enums/SubActivityScalarFieldEnum.schema';

export const SubActivityFindManySchema = z.object({
	orderBy: z
		.union([
			SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: SubActivityWhereInputObjectSchema.optional(),
	cursor: SubActivityWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(SubActivityScalarFieldEnumSchema).optional()
});
