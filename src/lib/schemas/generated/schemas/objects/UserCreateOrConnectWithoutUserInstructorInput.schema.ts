import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserInstructorInputObjectSchema } from './UserCreateWithoutUserInstructorInput.schema';
import { UserUncheckedCreateWithoutUserInstructorInputObjectSchema } from './UserUncheckedCreateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserInstructorInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutUserInstructorInputObjectSchema)
		])
	})
	.strict();

export const UserCreateOrConnectWithoutUserInstructorInputObjectSchema = Schema;
