import { z } from 'zod';
import { ProjectScalarWhereInputObjectSchema } from './ProjectScalarWhereInput.schema';
import { ProjectUpdateManyMutationInputObjectSchema } from './ProjectUpdateManyMutationInput.schema';
import { ProjectUncheckedUpdateManyWithoutProjectInputObjectSchema } from './ProjectUncheckedUpdateManyWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutProgramInput> = z
	.object({
		where: z.lazy(() => ProjectScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => ProjectUpdateManyMutationInputObjectSchema),
			z.lazy(() => ProjectUncheckedUpdateManyWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ProjectUpdateManyWithWhereWithoutProgramInputObjectSchema = Schema;
