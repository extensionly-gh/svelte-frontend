import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';

export const UserEnrollmentsDeleteOneSchema = z.object({
	where: UserEnrollmentsWhereUniqueInputObjectSchema
});
