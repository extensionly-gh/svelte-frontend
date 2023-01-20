import { z } from 'zod';
import { ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityRelationFilter> = z
	.object({
		is: z.lazy(() => ActivityWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => ActivityWhereInputObjectSchema).optional()
	})
	.strict();

export const ActivityRelationFilterObjectSchema = Schema;
