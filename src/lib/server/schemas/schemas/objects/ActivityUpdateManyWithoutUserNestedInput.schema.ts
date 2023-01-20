import { z } from 'zod';
import { ActivityCreateWithoutUserInputObjectSchema } from './ActivityCreateWithoutUserInput.schema';
import { ActivityUncheckedCreateWithoutUserInputObjectSchema } from './ActivityUncheckedCreateWithoutUserInput.schema';
import { ActivityCreateOrConnectWithoutUserInputObjectSchema } from './ActivityCreateOrConnectWithoutUserInput.schema';
import { ActivityUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ActivityUpsertWithWhereUniqueWithoutUserInput.schema';
import { ActivityCreateManyUserInputEnvelopeObjectSchema } from './ActivityCreateManyUserInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ActivityUpdateWithWhereUniqueWithoutUserInput.schema';
import { ActivityUpdateManyWithWhereWithoutUserInputObjectSchema } from './ActivityUpdateManyWithWhereWithoutUserInput.schema';
import { ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateManyWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ActivityCreateWithoutUserInputObjectSchema),
				z.lazy(() => ActivityCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => ActivityUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => ActivityUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => ActivityCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => ActivityCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => ActivityUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => ActivityUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => ActivityCreateManyUserInputEnvelopeObjectSchema).optional(),
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
				z.lazy(() => ActivityUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => ActivityUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => ActivityUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => ActivityUpdateManyWithWhereWithoutUserInputObjectSchema).array()
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

export const ActivityUpdateManyWithoutUserNestedInputObjectSchema = Schema;
