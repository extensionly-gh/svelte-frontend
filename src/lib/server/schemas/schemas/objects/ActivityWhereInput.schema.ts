import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumTargetAudienceFilterObjectSchema } from './EnumTargetAudienceFilter.schema';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { EnumEventVisibilityFilterObjectSchema } from './EnumEventVisibilityFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumActivityStatusFilterObjectSchema } from './EnumActivityStatusFilter.schema';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';
import { EnumModalityNullableFilterObjectSchema } from './EnumModalityNullableFilter.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { UserEnrollmentsListRelationFilterObjectSchema } from './UserEnrollmentsListRelationFilter.schema';
import { SubActivityListRelationFilterObjectSchema } from './SubActivityListRelationFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { ProjectRelationFilterObjectSchema } from './ProjectRelationFilter.schema';
import { ProjectWhereInputObjectSchema } from './ProjectWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ActivityWhereInputObjectSchema),
				z.lazy(() => ActivityWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ActivityWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ActivityWhereInputObjectSchema),
				z.lazy(() => ActivityWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		category: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		location: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		prerequisites: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		endDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		enrollmentStart: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		enrollmentEnd: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		contact: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		faculty: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		targetAudience: z
			.union([
				z.lazy(() => EnumTargetAudienceFilterObjectSchema),
				z.lazy(() => TargetAudienceSchema)
			])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => EnumActivityStatusFilterObjectSchema),
				z.lazy(() => ActivityStatusSchema)
			])
			.optional(),
		modality: z
			.union([z.lazy(() => EnumModalityNullableFilterObjectSchema), z.lazy(() => ModalitySchema)])
			.optional()
			.nullable(),
		proponentId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		projectId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		UserEnrollments: z.lazy(() => UserEnrollmentsListRelationFilterObjectSchema).optional(),
		SubActivity: z.lazy(() => SubActivityListRelationFilterObjectSchema).optional(),
		User: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema)
			])
			.optional(),
		Project: z
			.union([
				z.lazy(() => ProjectRelationFilterObjectSchema),
				z.lazy(() => ProjectWhereInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ActivityWhereInputObjectSchema = Schema;
