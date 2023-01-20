import { z } from 'zod';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumEnrollmentStatusFilter> = z
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
				z.lazy(() => NestedEnumEnrollmentStatusFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const NestedEnumEnrollmentStatusFilterObjectSchema = Schema;
