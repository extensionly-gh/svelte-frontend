import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './objects/VerificationWhereUniqueInput.schema';
import { VerificationCreateInputObjectSchema } from './objects/VerificationCreateInput.schema';
import { VerificationUncheckedCreateInputObjectSchema } from './objects/VerificationUncheckedCreateInput.schema';
import { VerificationUpdateInputObjectSchema } from './objects/VerificationUpdateInput.schema';
import { VerificationUncheckedUpdateInputObjectSchema } from './objects/VerificationUncheckedUpdateInput.schema';

export const VerificationUpsertSchema = z.object({
	where: VerificationWhereUniqueInputObjectSchema,
	create: z.union([
		VerificationCreateInputObjectSchema,
		VerificationUncheckedCreateInputObjectSchema
	]),
	update: z.union([
		VerificationUpdateInputObjectSchema,
		VerificationUncheckedUpdateInputObjectSchema
	])
});
