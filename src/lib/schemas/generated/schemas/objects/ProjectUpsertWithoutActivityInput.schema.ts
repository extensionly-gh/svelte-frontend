import { z } from 'zod';
import { ProjectUpdateWithoutActivityInputObjectSchema } from './ProjectUpdateWithoutActivityInput.schema';
import { ProjectUncheckedUpdateWithoutActivityInputObjectSchema } from './ProjectUncheckedUpdateWithoutActivityInput.schema';
import { ProjectCreateWithoutActivityInputObjectSchema } from './ProjectCreateWithoutActivityInput.schema';
import { ProjectUncheckedCreateWithoutActivityInputObjectSchema } from './ProjectUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpsertWithoutActivityInput> = z
	.object({
		update: z.union([
			z.lazy(() => ProjectUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => ProjectUncheckedUpdateWithoutActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ProjectCreateWithoutActivityInputObjectSchema),
			z.lazy(() => ProjectUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const ProjectUpsertWithoutActivityInputObjectSchema = Schema;
