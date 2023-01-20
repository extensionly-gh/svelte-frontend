import { z } from 'zod';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumActivityStatusFilter> = z
	.object({
		equals: z.lazy(() => ActivityStatusSchema).optional(),
		in: z
			.lazy(() => ActivityStatusSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ActivityStatusSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => ActivityStatusSchema),
				z.lazy(() => NestedEnumActivityStatusFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const NestedEnumActivityStatusFilterObjectSchema = Schema;
