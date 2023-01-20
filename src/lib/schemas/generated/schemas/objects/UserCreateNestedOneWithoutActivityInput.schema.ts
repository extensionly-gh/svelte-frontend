import { z } from 'zod';
import { UserCreateWithoutActivityInputObjectSchema } from './UserCreateWithoutActivityInput.schema';
import { UserUncheckedCreateWithoutActivityInputObjectSchema } from './UserUncheckedCreateWithoutActivityInput.schema';
import { UserCreateOrConnectWithoutActivityInputObjectSchema } from './UserCreateOrConnectWithoutActivityInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutActivityInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutActivityInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutActivityInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const UserCreateNestedOneWithoutActivityInputObjectSchema = Schema;
