import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';

export const VerificationDeleteOneSchema = z.object({
	where: VerificationWhereUniqueInputObjectSchema
});
