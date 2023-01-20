import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './objects/UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsCreateInputObjectSchema } from './objects/UserEnrollmentsCreateInput.schema';
import { UserEnrollmentsUncheckedCreateInputObjectSchema } from './objects/UserEnrollmentsUncheckedCreateInput.schema';
import { UserEnrollmentsUpdateInputObjectSchema } from './objects/UserEnrollmentsUpdateInput.schema';
import { UserEnrollmentsUncheckedUpdateInputObjectSchema } from './objects/UserEnrollmentsUncheckedUpdateInput.schema';

export const UserEnrollmentsUpsertSchema = z.object({
	where: UserEnrollmentsWhereUniqueInputObjectSchema,
	create: z.union([
		UserEnrollmentsCreateInputObjectSchema,
		UserEnrollmentsUncheckedCreateInputObjectSchema
	]),
	update: z.union([
		UserEnrollmentsUpdateInputObjectSchema,
		UserEnrollmentsUncheckedUpdateInputObjectSchema
	])
});
