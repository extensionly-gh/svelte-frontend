import { z } from 'zod';
import { UserEnrollmentsUpdateInputObjectSchema } from './objects/UserEnrollmentsUpdateInput.schema';
import { UserEnrollmentsUncheckedUpdateInputObjectSchema } from './objects/UserEnrollmentsUncheckedUpdateInput.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';

export const UserEnrollmentsUpdateOneSchema = z.object({
	data: z.union([
		UserEnrollmentsUpdateInputObjectSchema,
		UserEnrollmentsUncheckedUpdateInputObjectSchema
	]),
	where: UserEnrollmentsWhereUniqueInputObjectSchema
});
