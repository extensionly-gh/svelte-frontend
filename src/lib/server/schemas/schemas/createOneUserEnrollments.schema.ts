import { z } from 'zod';
import { UserEnrollmentsCreateInputObjectSchema } from './objects/UserEnrollmentsCreateInput.schema';
import { UserEnrollmentsUncheckedCreateInputObjectSchema } from './objects/UserEnrollmentsUncheckedCreateInput.schema';

export const UserEnrollmentsCreateOneSchema = z.object({
	data: z.union([
		UserEnrollmentsCreateInputObjectSchema,
		UserEnrollmentsUncheckedCreateInputObjectSchema
	])
});
