import { z } from 'zod';
import { UserInstructorWhereInputObjectSchema } from './objects/UserInstructorWhereInput.schema';

export const UserInstructorDeleteManySchema = z.object({
	where: UserInstructorWhereInputObjectSchema.optional()
});
