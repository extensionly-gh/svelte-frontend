import { z } from 'zod';
import { VerificationCreateInputObjectSchema } from './objects/VerificationCreateInput.schema';
import { VerificationUncheckedCreateInputObjectSchema } from './objects/VerificationUncheckedCreateInput.schema';

export const VerificationCreateOneSchema = z.object({
	data: z.union([VerificationCreateInputObjectSchema, VerificationUncheckedCreateInputObjectSchema])
});
