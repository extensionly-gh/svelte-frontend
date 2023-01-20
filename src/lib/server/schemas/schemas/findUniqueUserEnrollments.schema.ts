import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';

export const UserEnrollmentsFindUniqueSchema = z.object({
	where: UserEnrollmentsWhereUniqueInputObjectSchema
});
