import { z } from 'zod';
import { ProjectCreateWithoutProgramInputObjectSchema } from './ProjectCreateWithoutProgramInput.schema';
import { ProjectUncheckedCreateWithoutProgramInputObjectSchema } from './ProjectUncheckedCreateWithoutProgramInput.schema';
import { ProjectCreateOrConnectWithoutProgramInputObjectSchema } from './ProjectCreateOrConnectWithoutProgramInput.schema';
import { ProjectCreateManyProgramInputEnvelopeObjectSchema } from './ProjectCreateManyProgramInputEnvelope.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateNestedManyWithoutProgramInput> = z
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
		createMany: z.lazy(() => ProjectCreateManyProgramInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => ProjectWhereUniqueInputObjectSchema),
				z.lazy(() => ProjectWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const ProjectUncheckedCreateNestedManyWithoutProgramInputObjectSchema = Schema;
