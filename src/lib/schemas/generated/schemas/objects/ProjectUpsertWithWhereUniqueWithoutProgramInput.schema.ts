import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutProgramInputObjectSchema } from './ProjectUpdateWithoutProgramInput.schema';
import { ProjectUncheckedUpdateWithoutProgramInputObjectSchema } from './ProjectUncheckedUpdateWithoutProgramInput.schema';
import { ProjectCreateWithoutProgramInputObjectSchema } from './ProjectCreateWithoutProgramInput.schema';
import { ProjectUncheckedCreateWithoutProgramInputObjectSchema } from './ProjectUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithWhereUniqueWithoutProgramInput> = z
	.object({
		where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => ProjectUpdateWithoutProgramInputObjectSchema),
			z.lazy(() => ProjectUncheckedUpdateWithoutProgramInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ProjectCreateWithoutProgramInputObjectSchema),
			z.lazy(() => ProjectUncheckedCreateWithoutProgramInputObjectSchema)
		])
	})
	.strict();

export const ProjectUpsertWithWhereUniqueWithoutProgramInputObjectSchema = Schema;
