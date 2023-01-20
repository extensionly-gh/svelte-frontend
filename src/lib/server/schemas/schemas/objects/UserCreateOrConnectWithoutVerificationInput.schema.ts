import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutVerificationInputObjectSchema } from './UserCreateWithoutVerificationInput.schema';
import { UserUncheckedCreateWithoutVerificationInputObjectSchema } from './UserUncheckedCreateWithoutVerificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutVerificationInput> = z
	.object({
		where: z.lazy(() => UserWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserCreateWithoutVerificationInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutVerificationInputObjectSchema)
		])
	})
	.strict();

export const UserCreateOrConnectWithoutVerificationInputObjectSchema = Schema;
