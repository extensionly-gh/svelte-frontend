import { z } from 'zod';
import { SubActivityWhereInputObjectSchema } from './SubActivityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityListRelationFilter> = z
	.object({
		every: z.lazy(() => SubActivityWhereInputObjectSchema).optional(),
		some: z.lazy(() => SubActivityWhereInputObjectSchema).optional(),
		none: z.lazy(() => SubActivityWhereInputObjectSchema).optional()
	})
	.strict();

export const SubActivityListRelationFilterObjectSchema = Schema;
