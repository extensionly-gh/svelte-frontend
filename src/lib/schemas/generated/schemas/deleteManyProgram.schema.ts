import { z } from 'zod';
import { ProgramWhereInputObjectSchema } from './objects/ProgramWhereInput.schema';

export const ProgramDeleteManySchema = z.object({
	where: ProgramWhereInputObjectSchema.optional()
});
