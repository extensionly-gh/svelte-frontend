import { z } from 'zod';
import { ProjectCreateWithoutProgramInputObjectSchema } from './ProjectCreateWithoutProgramInput.schema';
import { ProjectUncheckedCreateWithoutProgramInputObjectSchema } from './ProjectUncheckedCreateWithoutProgramInput.schema';
import { ProjectCreateOrConnectWithoutProgramInputObjectSchema } from './ProjectCreateOrConnectWithoutProgramInput.schema';
import { ProjectUpsertWithWhereUniqueWithoutProgramInputObjectSchema } from './ProjectUpsertWithWhereUniqueWithoutProgramInput.schema';
import { ProjectCreateManyProgramInputEnvelopeObjectSchema } from './ProjectCreateManyProgramInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithWhereUniqueWithoutProgramInputObjectSchema } from './ProjectUpdateWithWhereUniqueWithoutProgramInput.schema';
import { ProjectUpdateManyWithWhereWithoutProgramInputObjectSchema } from './ProjectUpdateManyWithWhereWithoutProgramInput.schema';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedUpdateManyWithoutProgramNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ProjectCreateWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectCreateWithoutProgramInputObjectSchema).array(),
				z.lazy(() => ProjectUncheckedCreateWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutProgramInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => ProjectCreateOrConnectWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectCreateOrConnectWithoutProgramInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => ProjectUpsertWithWhereUniqueWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectUpsertWithWhereUniqueWithoutProgramInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => ProjectCreateManyProgramInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => ProjectWhereUniqueInputObjectSchema),
				z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => ProjectWhereUniqueInputObjectSchema),
				z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => ProjectWhereUniqueInputObjectSchema),
				z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => ProjectWhereUniqueInputObjectSchema),
				z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => ProjectUpdateWithWhereUniqueWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectUpdateWithWhereUniqueWithoutProgramInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => ProjectUpdateManyWithWhereWithoutProgramInputObjectSchema),
				z.lazy(() => ProjectUpdateManyWithWhereWithoutProgramInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => ProjectScalarWhereInputObjectSchema),
				z.lazy(() => ProjectScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const ProjectUncheckedUpdateManyWithoutProgramNestedInputObjectSchema = Schema;
