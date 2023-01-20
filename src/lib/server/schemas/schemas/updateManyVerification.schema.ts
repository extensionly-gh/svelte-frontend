import { z } from 'zod';
import { VerificationUpdateManyMutationInputObjectSchema } from './objects/VerificationUpdateManyMutationInput.schema';
import { VerificationWhereInputObjectSchema } from './objects/VerificationWhereInput.schema';

export const VerificationUpdateManySchema = z.object({
	data: VerificationUpdateManyMutationInputObjectSchema,
	where: VerificationWhereInputObjectSchema.optional()
});
