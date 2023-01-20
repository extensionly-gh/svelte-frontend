import { z } from 'zod';
import { ProgramUpdateManyMutationInputObjectSchema } from './objects/ProgramUpdateManyMutationInput.schema';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';

export const ProgramUpdateManySchema = z.object({
	data: ProgramUpdateManyMutationInputObjectSchema,
	where: ProgramWhereInputObjectSchema.optional()
});
