import { z } from 'zod';
import { VerificationCreateWithoutUserInputObjectSchema } from './VerificationCreateWithoutUserInput.schema';
import { VerificationUncheckedCreateWithoutUserInputObjectSchema } from './VerificationUncheckedCreateWithoutUserInput.schema';
import { VerificationCreateOrConnectWithoutUserInputObjectSchema } from './VerificationCreateOrConnectWithoutUserInput.schema';
import { VerificationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './VerificationUpsertWithWhereUniqueWithoutUserInput.schema';
import { VerificationCreateManyUserInputEnvelopeObjectSchema } from './VerificationCreateManyUserInputEnvelope.schema';
import { VerificationWhereUniqueInputObjectSchema } from './VerificationWhereUniqueInput.schema';
import { VerificationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './VerificationUpdateWithWhereUniqueWithoutUserInput.schema';
import { VerificationUpdateManyWithWhereWithoutUserInputObjectSchema } from './VerificationUpdateManyWithWhereWithoutUserInput.schema';
import { VerificationScalarWhereInputObjectSchema } from './VerificationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUncheckedUpdateManyWithoutUserNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => VerificationCreateWithoutUserInputObjectSchema),
				z.lazy(() => VerificationCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => VerificationCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => VerificationCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => VerificationUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => VerificationUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => VerificationCreateManyUserInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => VerificationWhereUniqueInputObjectSchema),
				z.lazy(() => VerificationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => VerificationWhereUniqueInputObjectSchema),
				z.lazy(() => VerificationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => VerificationWhereUniqueInputObjectSchema),
				z.lazy(() => VerificationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => VerificationWhereUniqueInputObjectSchema),
				z.lazy(() => VerificationWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => VerificationUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => VerificationUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => VerificationUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => VerificationUpdateManyWithWhereWithoutUserInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => VerificationScalarWhereInputObjectSchema),
				z.lazy(() => VerificationScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const VerificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema;
