import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './objects/UserInstructorWhereUniqueInput.schema';

export const UserInstructorDeleteOneSchema = z.object({
	where: UserInstructorWhereUniqueInputObjectSchema
});
