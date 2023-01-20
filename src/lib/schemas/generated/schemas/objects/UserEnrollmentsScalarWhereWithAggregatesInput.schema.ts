import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEnrollmentStatusWithAggregatesFilterObjectSchema } from './EnumEnrollmentStatusWithAggregatesFilter.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		activityId: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		status: z
			.union([
				z.lazy(() => EnumEnrollmentStatusWithAggregatesFilterObjectSchema),
				z.lazy(() => EnrollmentStatusSchema)
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsScalarWhereWithAggregatesInputObjectSchema = Schema;
