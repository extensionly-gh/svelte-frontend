import { z } from 'zod';
import { UserInstructorCreateInputObjectSchema } from './objects/UserInstructorCreateInput.schema';
import { UserInstructorUncheckedCreateInputObjectSchema } from './objects/UserInstructorUncheckedCreateInput.schema';

export const UserInstructorCreateOneSchema = z.object({
	data: z.union([
		UserInstructorCreateInputObjectSchema,
		UserInstructorUncheckedCreateInputObjectSchema
	])
});
