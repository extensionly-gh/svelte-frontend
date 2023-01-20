import { z } from 'zod';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';
import { ProgramOrderByWithAggregationInputObjectSchema } from './objects/ProgramOrderByWithAggregationInput.schema';
import { ProgramScalarWhereWithAggregatesInputObjectSchema } from './objects/ProgramScalarWhereWithAggregatesInput.schema';
import { ProgramScalarFieldEnumSchema } from './enums/ProgramScalarFieldEnum.schema';

export const ProgramGroupBySchema = z.object({
	where: ProgramWhereInputObjectSchema.optional(),
	orderBy: z
		.union([
			ProgramOrderByWithAggregationInputObjectSchema,
			ProgramOrderByWithAggregationInputObjectSchema.array()
		])
		.optional(),
	having: ProgramScalarWhereWithAggregatesInputObjectSchema.optional(),
	take: z.number().optional(),
	skip: z.number().optional(),
	by: z.array(ProgramScalarFieldEnumSchema)
});
