import { z } from 'zod';
import { UserCreateWithoutUserEnrollmentsInputObjectSchema } from './UserCreateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedCreateWithoutUserEnrollmentsInput.schema';
import { UserCreateOrConnectWithoutUserEnrollmentsInputObjectSchema } from './UserCreateOrConnectWithoutUserEnrollmentsInput.schema';
import { UserUpsertWithoutUserEnrollmentsInputObjectSchema } from './UserUpsertWithoutUserEnrollmentsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutUserEnrollmentsInputObjectSchema } from './UserUpdateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedUpdateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutUserEnrollmentsNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutUserEnrollmentsInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => UserCreateOrConnectWithoutUserEnrollmentsInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => UserUpsertWithoutUserEnrollmentsInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutUserEnrollmentsInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserUpdateOneRequiredWithoutUserEnrollmentsNestedInputObjectSchema = Schema;
