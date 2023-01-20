import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';
import { UserInstructorCreateInputObjectSchema } from './objects/UserInstructorCreateInput.schema';
import { UserInstructorUncheckedCreateInputObjectSchema } from './objects/UserInstructorUncheckedCreateInput.schema';
import { UserInstructorUpdateInputObjectSchema } from './objects/UserInstructorUpdateInput.schema';
import { UserInstructorUncheckedUpdateInputObjectSchema } from './objects/UserInstructorUncheckedUpdateInput.schema';

export const UserInstructorUpsertSchema = z.object({
	where: UserInstructorWhereUniqueInputObjectSchema,
	create: z.union([
		UserInstructorCreateInputObjectSchema,
		UserInstructorUncheckedCreateInputObjectSchema
	]),
	update: z.union([
		UserInstructorUpdateInputObjectSchema,
		UserInstructorUncheckedUpdateInputObjectSchema
	])
});
