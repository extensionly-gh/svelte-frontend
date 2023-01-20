import { z } from 'zod';
import { UserEnrollmentsCreateWithoutUserInputObjectSchema } from './UserEnrollmentsCreateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutUserInput.schema';
import { UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema } from './UserEnrollmentsCreateOrConnectWithoutUserInput.schema';
import { UserEnrollmentsUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserEnrollmentsUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserEnrollmentsCreateManyUserInputEnvelopeObjectSchema } from './UserEnrollmentsCreateManyUserInputEnvelope.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserEnrollmentsUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserEnrollmentsUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserEnrollmentsUpdateManyWithWhereWithoutUserInput.schema';
import { UserEnrollmentsScalarWhereInputObjectSchema } from './UserEnrollmentsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpdateManyWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => UserEnrollmentsUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserEnrollmentsCreateManyUserInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => UserEnrollmentsUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => UserEnrollmentsUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpdateManyWithWhereWithoutUserInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema),
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsUpdateManyWithoutUserNestedInputObjectSchema = Schema;
