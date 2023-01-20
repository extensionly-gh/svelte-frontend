import { z } from 'zod';
import { UserUpdateWithoutUserInstructorInputObjectSchema } from './UserUpdateWithoutUserInstructorInput.schema';
import { UserUncheckedUpdateWithoutUserInstructorInputObjectSchema } from './UserUncheckedUpdateWithoutUserInstructorInput.schema';
import { UserCreateWithoutUserInstructorInputObjectSchema } from './UserCreateWithoutUserInstructorInput.schema';
import { UserUncheckedCreateWithoutUserInstructorInputObjectSchema } from './UserUncheckedCreateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUserInstructorInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutUserInstructorInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutUserInstructorInputObjectSchema)
		])
	})
	.strict();

export const UserUpsertWithoutUserInstructorInputObjectSchema = Schema;
