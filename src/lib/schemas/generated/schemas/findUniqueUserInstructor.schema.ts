import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';

export const UserInstructorFindUniqueSchema = z.object({
	where: UserInstructorWhereUniqueInputObjectSchema
});
