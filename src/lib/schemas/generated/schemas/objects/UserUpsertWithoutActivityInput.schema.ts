import { z } from 'zod';
import { UserUpdateWithoutActivityInputObjectSchema } from './UserUpdateWithoutActivityInput.schema';
import { UserUncheckedUpdateWithoutActivityInputObjectSchema } from './UserUncheckedUpdateWithoutActivityInput.schema';
import { UserCreateWithoutActivityInputObjectSchema } from './UserCreateWithoutActivityInput.schema';
import { UserUncheckedCreateWithoutActivityInputObjectSchema } from './UserUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutActivityInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutActivityInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const UserUpsertWithoutActivityInputObjectSchema = Schema;
