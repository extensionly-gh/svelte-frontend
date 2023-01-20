import { z } from 'zod';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumActivityStatusFilterObjectSchema } from './NestedEnumActivityStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumActivityStatusWithAggregatesFilter> = z
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
				z.lazy(() => NestedEnumActivityStatusWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumActivityStatusFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumActivityStatusFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumActivityStatusWithAggregatesFilterObjectSchema = Schema;
