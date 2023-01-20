import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutProgramInputObjectSchema } from './ProjectCreateWithoutProgramInput.schema';
import { ProjectUncheckedCreateWithoutProgramInputObjectSchema } from './ProjectUncheckedCreateWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutProgramInput> = z
	.object({
		where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ProjectCreateWithoutProgramInputObjectSchema),
			z.lazy(() => ProjectUncheckedCreateWithoutProgramInputObjectSchema)
		])
	})
	.strict();

export const ProjectCreateOrConnectWithoutProgramInputObjectSchema = Schema;
