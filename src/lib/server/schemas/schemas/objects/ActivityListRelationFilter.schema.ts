import { z } from 'zod';
import { ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityListRelationFilter> = z
	.object({
		every: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
		some: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
		none: z.lazy(() => ActivityWhereInputObjectSchema).optional()
	})
	.strict();

export const ActivityListRelationFilterObjectSchema = Schema;
