import { z } from 'zod';
import { UserUpdateWithoutUserEnrollmentsInputObjectSchema } from './UserUpdateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedUpdateWithoutUserEnrollmentsInput.schema';
import { UserCreateWithoutUserEnrollmentsInputObjectSchema } from './UserCreateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedCreateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutUserEnrollmentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
		])
	})
	.strict();

export const UserUpsertWithoutUserEnrollmentsInputObjectSchema = Schema;
