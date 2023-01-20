import { z } from 'zod';
import { ProgramCreateManyInputObjectSchema } from './objects/ProgramCreateManyInput.schema';

export const ProgramCreateManySchema = z.object({
	data: z.union([ProgramCreateManyInputObjectSchema, z.array(ProgramCreateManyInputObjectSchema)])
});
