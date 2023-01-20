import { z } from 'zod';
import { ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './objects/ProgramOrderByWithRelationAndSearchRelevanceInput.schema';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';
import { ProgramScalarFieldEnumSchema } from './enums/ProgramScalarFieldEnum.schema';

export const ProgramFindFirstSchema = z.object({
	orderBy: z
		.union([
			ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema,
			ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema.array()
		])
		.optional(),
	where: ProgramWhereInputObjectSchema.optional(),
	cursor: ProgramWhereUniqueInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	distinct: z.array(ProgramScalarFieldEnumSchema).optional()
});
