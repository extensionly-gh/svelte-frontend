import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutUserEnrollmentsInputObjectSchema } from './UserCreateWithoutUserEnrollmentsInput.schema';
import { UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './UserUncheckedCreateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserEnrollmentsInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
		])
	})
	.strict();

export const UserCreateOrConnectWithoutUserEnrollmentsInputObjectSchema = Schema;
