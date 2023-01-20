import { z } from 'zod';
import { VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';

export const VerificationDeleteManySchema = z.object({
	where: VerificationWhereInputObjectSchema.optional()
});
