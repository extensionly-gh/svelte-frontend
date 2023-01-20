import { z } from 'zod';
import { UserCreateWithoutUserEnrollmentsInputObjectSchema } from './UserCreateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedCreateWithoutUserEnrollmentsInput.schema';
import { UserCreateOrConnectWithoutUserEnrollmentsInputObjectSchema } from './UserCreateOrConnectWithoutUserEnrollmentsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutUserEnrollmentsInput> = z
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
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const UserCreateNestedOneWithoutUserEnrollmentsInputObjectSchema = Schema;
