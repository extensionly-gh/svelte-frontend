import { z } from 'zod';
import { UserUpdateWithoutVerificationInputObjectSchema } from './UserUpdateWithoutVerificationInput.schema';
import { UserUncheckedUpdateWithoutVerificationInputObjectSchema } from './UserUncheckedUpdateWithoutVerificationInput.schema';
import { UserCreateWithoutVerificationInputObjectSchema } from './UserCreateWithoutVerificationInput.schema';
import { UserUncheckedCreateWithoutVerificationInputObjectSchema } from './UserUncheckedCreateWithoutVerificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutVerificationInput> = z
	.object({
		update: z.union([
			z.lazy(() => UserUpdateWithoutVerificationInputObjectSchema),
			z.lazy(() => UserUncheckedUpdateWithoutVerificationInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserCreateWithoutVerificationInputObjectSchema),
			z.lazy(() => UserUncheckedCreateWithoutVerificationInputObjectSchema)
		])
	})
	.strict();

export const UserUpsertWithoutVerificationInputObjectSchema = Schema;
