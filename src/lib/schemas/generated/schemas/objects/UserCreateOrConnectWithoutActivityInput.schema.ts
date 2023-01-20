import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutActivityInputObjectSchema } from './UserCreateWithoutActivityInput.schema';
import { UserUncheckedCreateWithoutActivityInputObjectSchema } from './UserUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutActivityInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutActivityInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const UserCreateOrConnectWithoutActivityInputObjectSchema = Schema;
