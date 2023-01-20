import { z } from 'zod';
import { UserEnrollmentsUpdateManyMutationInputObjectSchema } from './objects/UserEnrollmentsUpdateManyMutationInput.schema';
import { UserEnrollmentsWhereInputObjectSchema } from './objects/UserEnrollmentsWhereInput.schema';

export const UserEnrollmentsUpdateManySchema = z.object({
	data: UserEnrollmentsUpdateManyMutationInputObjectSchema,
	where: UserEnrollmentsWhereInputObjectSchema.optional()
});
