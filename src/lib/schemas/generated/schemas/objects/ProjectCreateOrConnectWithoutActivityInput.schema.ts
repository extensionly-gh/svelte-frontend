import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectCreateWithoutActivityInputObjectSchema } from './ProjectCreateWithoutActivityInput.schema';
import { ProjectUncheckedCreateWithoutActivityInputObjectSchema } from './ProjectUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutActivityInput> = z
	.object({
		where: z.lazy(() => ProjectWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ProjectCreateWithoutActivityInputObjectSchema),
			z.lazy(() => ProjectUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const ProjectCreateOrConnectWithoutActivityInputObjectSchema = Schema;
