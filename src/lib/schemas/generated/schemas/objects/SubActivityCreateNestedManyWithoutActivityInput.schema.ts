import { z } from 'zod';
import { SubActivityCreateWithoutActivityInputObjectSchema } from './SubActivityCreateWithoutActivityInput.schema';
import { SubActivityUncheckedCreateWithoutActivityInputObjectSchema } from './SubActivityUncheckedCreateWithoutActivityInput.schema';
import { SubActivityCreateOrConnectWithoutActivityInputObjectSchema } from './SubActivityCreateOrConnectWithoutActivityInput.schema';
import { SubActivityCreateManyActivityInputEnvelopeObjectSchema } from './SubActivityCreateManyActivityInputEnvelope.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateNestedManyWithoutActivityInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => SubActivityCreateWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityCreateWithoutActivityInputObjectSchema).array(),
				z.lazy(() => SubActivityUncheckedCreateWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityUncheckedCreateWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => SubActivityCreateOrConnectWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityCreateOrConnectWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => SubActivityCreateManyActivityInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const SubActivityCreateNestedManyWithoutActivityInputObjectSchema = Schema;
