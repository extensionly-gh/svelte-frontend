import { z } from 'zod';
import { SubActivityCreateWithoutActivityInputObjectSchema } from './SubActivityCreateWithoutActivityInput.schema';
import { SubActivityUncheckedCreateWithoutActivityInputObjectSchema } from './SubActivityUncheckedCreateWithoutActivityInput.schema';
import { SubActivityCreateOrConnectWithoutActivityInputObjectSchema } from './SubActivityCreateOrConnectWithoutActivityInput.schema';
import { SubActivityUpsertWithWhereUniqueWithoutActivityInputObjectSchema } from './SubActivityUpsertWithWhereUniqueWithoutActivityInput.schema';
import { SubActivityCreateManyActivityInputEnvelopeObjectSchema } from './SubActivityCreateManyActivityInputEnvelope.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityUpdateWithWhereUniqueWithoutActivityInputObjectSchema } from './SubActivityUpdateWithWhereUniqueWithoutActivityInput.schema';
import { SubActivityUpdateManyWithWhereWithoutActivityInputObjectSchema } from './SubActivityUpdateManyWithWhereWithoutActivityInput.schema';
import { SubActivityScalarWhereInputObjectSchema } from './SubActivityScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpdateManyWithoutActivityNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => SubActivityUpsertWithWhereUniqueWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityUpsertWithWhereUniqueWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => SubActivityCreateManyActivityInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
				z.lazy(() => SubActivityWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => SubActivityUpdateWithWhereUniqueWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityUpdateWithWhereUniqueWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => SubActivityUpdateManyWithWhereWithoutActivityInputObjectSchema),
				z.lazy(() => SubActivityUpdateManyWithWhereWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => SubActivityScalarWhereInputObjectSchema),
				z.lazy(() => SubActivityScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const SubActivityUpdateManyWithoutActivityNestedInputObjectSchema = Schema;
