import { z } from 'zod';
import { UserCreateWithoutUserInstructorInputObjectSchema } from './UserCreateWithoutUserInstructorInput.schema';
import { UserUncheckedCreateWithoutUserInstructorInputObjectSchema } from './UserUncheckedCreateWithoutUserInstructorInput.schema';
import { UserCreateOrConnectWithoutUserInstructorInputObjectSchema } from './UserCreateOrConnectWithoutUserInstructorInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserInstructorInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutUserInstructorInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutUserInstructorInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => UserCreateOrConnectWithoutUserInstructorInputObjectSchema)
			.optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const UserCreateNestedOneWithoutUserInstructorInputObjectSchema = Schema;
