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

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ActivityScalarWhereInputObjectSchema),
				z.lazy(() => ActivityScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ActivityScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ActivityScalarWhereInputObjectSchema),
				z.lazy(() => ActivityScalarWhereInputObjectSchema).array()
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
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
	})
	.strict();

export const ActivityScalarWhereInputObjectSchema = Schema;
