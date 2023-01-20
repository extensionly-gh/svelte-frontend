import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ActivityRelationFilterObjectSchema } from './ActivityRelationFilter.schema';
import { ActivityWhereInputObjectSchema } from './ActivityWhereInput.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEnrollmentStatusFilterObjectSchema } from './EnumEnrollmentStatusFilter.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserEnrollmentsWhereInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserEnrollmentsWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserEnrollmentsWhereInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		User: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema)
			])
			.optional(),
		userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		Activity: z
			.union([
				z.lazy(() => ActivityRelationFilterObjectSchema),
				z.lazy(() => ActivityWhereInputObjectSchema)
			])
			.optional(),
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

export const UserEnrollmentsWhereInputObjectSchema = Schema;
