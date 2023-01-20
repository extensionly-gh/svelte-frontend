import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEnrollmentStatusFilterObjectSchema } from './EnumEnrollmentStatusFilter.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema),
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema),
				z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		activityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		status: z
			.union([
				z.lazy(() => EnumEnrollmentStatusFilterObjectSchema),
				z.lazy(() => EnrollmentStatusSchema)
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsScalarWhereInputObjectSchema = Schema;
