import { z } from 'zod';
import { VerificationUpdateInputObjectSchema } from './objects/VerificationUpdateInput.schema';
import { VerificationUncheckedUpdateInputObjectSchema } from './objects/VerificationUncheckedUpdateInput.schema';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';

export const VerificationUpdateOneSchema = z.object({
	data: z.union([
		VerificationUpdateInputObjectSchema,
		VerificationUncheckedUpdateInputObjectSchema
	]),
	where: VerificationWhereUniqueInputObjectSchema
});
