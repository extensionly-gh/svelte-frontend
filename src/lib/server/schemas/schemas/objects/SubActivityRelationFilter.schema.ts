import { z } from 'zod';
import { SubActivityWhereInputObjectSchema } from './SubActivityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityRelationFilter> = z
	.object({
		is: z.lazy(() => SubActivityWhereInputObjectSchema).optional(),
		isNot: z.lazy(() => SubActivityWhereInputObjectSchema).optional()
	})
	.strict();

export const SubActivityRelationFilterObjectSchema = Schema;
