import { z } from 'zod';
import { UserInstructorUpdateInputObjectSchema } from './objects/UserInstructorUpdateInput.schema';
import { UserInstructorUncheckedUpdateInputObjectSchema } from './objects/UserInstructorUncheckedUpdateInput.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';

export const UserInstructorUpdateOneSchema = z.object({
	data: z.union([
		UserInstructorUpdateInputObjectSchema,
		UserInstructorUncheckedUpdateInputObjectSchema
	]),
	where: UserInstructorWhereUniqueInputObjectSchema
});
