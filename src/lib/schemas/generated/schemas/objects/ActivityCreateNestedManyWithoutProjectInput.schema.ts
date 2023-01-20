import { z } from 'zod';
import { ActivityCreateWithoutProjectInputObjectSchema } from './ActivityCreateWithoutProjectInput.schema';
import { ActivityUncheckedCreateWithoutProjectInputObjectSchema } from './ActivityUncheckedCreateWithoutProjectInput.schema';
import { ActivityCreateOrConnectWithoutProjectInputObjectSchema } from './ActivityCreateOrConnectWithoutProjectInput.schema';
import { ActivityCreateManyProjectInputEnvelopeObjectSchema } from './ActivityCreateManyProjectInputEnvelope.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateNestedManyWithoutProjectInput> = z
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
		createMany: z.lazy(() => ActivityCreateManyProjectInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => ActivityWhereUniqueInputObjectSchema),
				z.lazy(() => ActivityWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const ActivityCreateNestedManyWithoutProjectInputObjectSchema = Schema;
