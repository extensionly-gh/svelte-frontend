import { z } from 'zod';
import { UserCreateWithoutVerificationInputObjectSchema } from './UserCreateWithoutVerificationInput.schema';
import { UserUncheckedCreateWithoutVerificationInputObjectSchema } from './UserUncheckedCreateWithoutVerificationInput.schema';
import { UserCreateOrConnectWithoutVerificationInputObjectSchema } from './UserCreateOrConnectWithoutVerificationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutVerificationInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutVerificationInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutVerificationInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => UserCreateOrConnectWithoutVerificationInputObjectSchema)
			.optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const UserCreateNestedOneWithoutVerificationInputObjectSchema = Schema;
