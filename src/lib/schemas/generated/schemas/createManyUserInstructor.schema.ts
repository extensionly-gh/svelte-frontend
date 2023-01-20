import { z } from 'zod';
import { UserInstructorCreateManyInputObjectSchema } from './objects/UserInstructorCreateManyInput.schema';

export const UserInstructorCreateManySchema = z.object({
	data: z.union([
		UserInstructorCreateManyInputObjectSchema,
		z.array(UserInstructorCreateManyInputObjectSchema)
	])
});
