import { z } from 'zod';
import { UserEnrollmentsWhereInputObjectSchema } from './objects/UserEnrollmentsWhereInput.schema';

export const UserEnrollmentsDeleteManySchema = z.object({
	where: UserEnrollmentsWhereInputObjectSchema.optional()
});
