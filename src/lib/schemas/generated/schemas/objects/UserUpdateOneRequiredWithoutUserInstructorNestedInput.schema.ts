import { z } from 'zod';
import { UserCreateWithoutUserInstructorInputObjectSchema } from './UserCreateWithoutUserInstructorInput.schema';
import { UserUncheckedCreateWithoutUserInstructorInputObjectSchema } from './UserUncheckedCreateWithoutUserInstructorInput.schema';
import { UserCreateOrConnectWithoutUserInstructorInputObjectSchema } from './UserCreateOrConnectWithoutUserInstructorInput.schema';
import { UserUpsertWithoutUserInstructorInputObjectSchema } from './UserUpsertWithoutUserInstructorInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserInstructorInputObjectSchema } from './UserUpdateWithoutUserInstructorInput.schema';
import { UserUncheckedUpdateWithoutUserInstructorInputObjectSchema } from './UserUncheckedUpdateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserInstructorNestedInput> = z
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
		upsert: z.lazy(() => UserUpsertWithoutUserInstructorInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutUserInstructorInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutUserInstructorInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserUpdateOneRequiredWithoutUserInstructorNestedInputObjectSchema = Schema;
