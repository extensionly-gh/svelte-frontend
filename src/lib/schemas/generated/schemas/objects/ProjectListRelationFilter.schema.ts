import { z } from 'zod';
import { ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectListRelationFilter> = z
	.object({
		every: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
		some: z.lazy(() => ProjectWhereInputObjectSchema).optional(),
		none: z.lazy(() => ProjectWhereInputObjectSchema).optional()
	})
	.strict();

export const ProjectListRelationFilterObjectSchema = Schema;
