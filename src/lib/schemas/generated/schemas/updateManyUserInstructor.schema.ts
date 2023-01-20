import { z } from 'zod';
import { UserInstructorUpdateManyMutationInputObjectSchema } from './objects/UserInstructorUpdateManyMutationInput.schema';
import { UserInstructorWhereInputObjectSchema } from './objects/UserInstructorWhereInput.schema';

export const UserInstructorUpdateManySchema = z.object({
	data: UserInstructorUpdateManyMutationInputObjectSchema,
	where: UserInstructorWhereInputObjectSchema.optional()
});
