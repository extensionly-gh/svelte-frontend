import { z } from 'zod';
import { VerificationCreateManyInputObjectSchema } from './objects/VerificationCreateManyInput.schema';

export const VerificationCreateManySchema = z.object({
	data: z.union([
		VerificationCreateManyInputObjectSchema,
		z.array(VerificationCreateManyInputObjectSchema)
	])
});
