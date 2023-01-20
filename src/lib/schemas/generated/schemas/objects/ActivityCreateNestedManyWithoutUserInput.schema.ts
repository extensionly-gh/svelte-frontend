import { z } from 'zod';
import { ActivityCreateWithoutUserInputObjectSchema } from './ActivityCreateWithoutUserInput.schema';
import { ActivityUncheckedCreateWithoutUserInputObjectSchema } from './ActivityUncheckedCreateWithoutUserInput.schema';
import { ActivityCreateOrConnectWithoutUserInputObjectSchema } from './ActivityCreateOrConnectWithoutUserInput.schema';
import { ActivityCreateManyUserInputEnvelopeObjectSchema } from './ActivityCreateManyUserInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutUserInput> = z
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
		createMany: z.lazy(() => ActivityCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const ActivityCreateNestedManyWithoutUserInputObjectSchema = Schema;
