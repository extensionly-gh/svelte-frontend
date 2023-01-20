import { z } from 'zod';
import { ProgramCreateInputObjectSchema } from './objects/ProgramCreateInput.schema';
import { ProgramUncheckedCreateInputObjectSchema } from './objects/ProgramUncheckedCreateInput.schema';

export const ProgramCreateOneSchema = z.object({
	data: z.union([ProgramCreateInputObjectSchema, ProgramUncheckedCreateInputObjectSchema])
});
