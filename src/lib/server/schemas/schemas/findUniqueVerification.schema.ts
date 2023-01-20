import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';

export const VerificationFindUniqueSchema = z.object({
	where: VerificationWhereUniqueInputObjectSchema
});
