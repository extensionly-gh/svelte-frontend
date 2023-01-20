import { z } from 'zod';
import { UserCreateWithoutActivityInputObjectSchema } from './UserCreateWithoutActivityInput.schema';
import { UserUncheckedCreateWithoutActivityInputObjectSchema } from './UserUncheckedCreateWithoutActivityInput.schema';
import { UserCreateOrConnectWithoutActivityInputObjectSchema } from './UserCreateOrConnectWithoutActivityInput.schema';
import { UserUpsertWithoutActivityInputObjectSchema } from './UserUpsertWithoutActivityInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutActivityInputObjectSchema } from './UserUpdateWithoutActivityInput.schema';
import { UserUncheckedUpdateWithoutActivityInputObjectSchema } from './UserUncheckedUpdateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutActivityNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserUncheckedCreateWithoutActivityInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutActivityInputObjectSchema).optional(),
		upsert: z.lazy(() => UserUpsertWithoutActivityInputObjectSchema).optional(),
		connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => UserUpdateWithoutActivityInputObjectSchema),
				z.lazy(() => UserUncheckedUpdateWithoutActivityInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserUpdateOneRequiredWithoutActivityNestedInputObjectSchema = Schema;
