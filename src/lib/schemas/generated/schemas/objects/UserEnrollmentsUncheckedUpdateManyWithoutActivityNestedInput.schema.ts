import { z } from 'zod';
import { UserEnrollmentsCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutActivityInput.schema';
import { UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateOrConnectWithoutActivityInput.schema';
import { UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInputObjectSchema } from './UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInput.schema';
import { UserEnrollmentsCreateManyActivityInputEnvelopeObjectSchema } from './UserEnrollmentsCreateManyActivityInputEnvelope.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInputObjectSchema } from './UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInput.schema';
import { UserEnrollmentsUpdateManyWithWhereWithoutActivityInputObjectSchema } from './UserEnrollmentsUpdateManyWithWhereWithoutActivityInput.schema';
import { UserEnrollmentsScalarWhereInputObjectSchema } from './UserEnrollmentsScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUncheckedUpdateManyWithoutActivityNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema).array(),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserEnrollmentsCreateManyActivityInputEnvelopeObjectSchema).optional(),
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
				z.lazy(() => UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => UserEnrollmentsUpdateManyWithWhereWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsUpdateManyWithWhereWithoutActivityInputObjectSchema).array()
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

export const UserEnrollmentsUncheckedUpdateManyWithoutActivityNestedInputObjectSchema = Schema;
