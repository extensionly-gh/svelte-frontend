import { z } from 'zod';
import { UserEnrollmentsCreateManyInputObjectSchema } from './objects/UserEnrollmentsCreateManyInput.schema';

export const UserEnrollmentsCreateManySchema = z.object({
	data: z.union([
		UserEnrollmentsCreateManyInputObjectSchema,
		z.array(UserEnrollmentsCreateManyInputObjectSchema)
	])
});
