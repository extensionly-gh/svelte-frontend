import { z } from 'zod';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEnrollmentStatusFilterObjectSchema } from './NestedEnumEnrollmentStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumEnrollmentStatusWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => EnrollmentStatusSchema).optional(),
		in: z
			.lazy(() => EnrollmentStatusSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => EnrollmentStatusSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => EnrollmentStatusSchema),
				z.lazy(() => NestedEnumEnrollmentStatusWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumEnrollmentStatusFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumEnrollmentStatusFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumEnrollmentStatusWithAggregatesFilterObjectSchema = Schema;
