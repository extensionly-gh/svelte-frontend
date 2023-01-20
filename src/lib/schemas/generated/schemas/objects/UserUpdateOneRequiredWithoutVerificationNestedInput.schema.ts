import { z } from 'zod';
import { UserCreateWithoutVerificationInputObjectSchema } from './UserCreateWithoutVerificationInput.schema';
import { UserUncheckedCreateWithoutVerificationInputObjectSchema } from './UserUncheckedCreateWithoutVerificationInput.schema';
import { UserCreateOrConnectWithoutVerificationInputObjectSchema } from './UserCreateOrConnectWithoutVerificationInput.schema';
import { UserUpsertWithoutVerificationInputObjectSchema } from './UserUpsertWithoutVerificationInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutVerificationInputObjectSchema } from './UserUpdateWithoutVerificationInput.schema';
import { UserUncheckedUpdateWithoutVerificationInputObjectSchema } from './UserUncheckedUpdateWithoutVerificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutVerificationNestedInput> = z
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
		upsert: z.lazy(() => UserUpsertWithoutVerificationInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutVerificationInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutVerificationInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserUpdateOneRequiredWithoutVerificationNestedInputObjectSchema = Schema;
