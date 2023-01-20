import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutProgramInputObjectSchema } from './ProjectUpdateWithoutProgramInput.schema';
import { ProjectUncheckedUpdateWithoutProgramInputObjectSchema } from './ProjectUncheckedUpdateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithWhereUniqueWithoutProgramInput> = z
	.object({
		where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => ProjectUpdateWithoutProgramInputObjectSchema),
			z.lazy(() => ProjectUncheckedUpdateWithoutProgramInputObjectSchema)
		])
	})
	.strict();

export const ProjectUpdateWithWhereUniqueWithoutProgramInputObjectSchema = Schema;
