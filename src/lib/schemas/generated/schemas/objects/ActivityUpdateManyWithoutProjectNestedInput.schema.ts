import { z } from 'zod';
import { ActivityCreateWithoutProjectInputObjectSchema } from './ActivityCreateWithoutProjectInput.schema';
import { ActivityUncheckedCreateWithoutProjectInputObjectSchema } from './ActivityUncheckedCreateWithoutProjectInput.schema';
import { ActivityCreateOrConnectWithoutProjectInputObjectSchema } from './ActivityCreateOrConnectWithoutProjectInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutProjectInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutProjectInput.schema';
import { ActivityCreateManyProjectInputEnvelopeObjectSchema } from './ActivityCreateManyProjectInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutProjectInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutProjectInput.schema';
import { ActivityUpdateManyWithWhereWithoutProjectInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutProjectInput.schema';
import { ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateManyWithoutProjectNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ActivityCreateWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityCreateWithoutProjectInputObjectSchema).array(),
				z.lazy(() => ActivityUncheckedCreateWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityUncheckedCreateWithoutProjectInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => ActivityCreateOrConnectWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityCreateOrConnectWithoutProjectInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => ActivityUpsertWithWhereUniqueWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityUpsertWithWhereUniqueWithoutProjectInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => ActivityCreateManyProjectInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => ActivityUpdateWithWhereUniqueWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityUpdateWithWhereUniqueWithoutProjectInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => ActivityUpdateManyWithWhereWithoutProjectInputObjectSchema),
				z.lazy(() => ActivityUpdateManyWithWhereWithoutProjectInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => ActivityScalarWhereInputObjectSchema),
				z.lazy(() => ActivityScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const ActivityUpdateManyWithoutProjectNestedInputObjectSchema = Schema;
