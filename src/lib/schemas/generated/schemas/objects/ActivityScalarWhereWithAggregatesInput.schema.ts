import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumTargetAudienceWithAggregatesFilterObjectSchema } from './EnumTargetAudienceWithAggregatesFilter.schema';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { EnumEventVisibilityWithAggregatesFilterObjectSchema } from './EnumEventVisibilityWithAggregatesFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumActivityStatusWithAggregatesFilterObjectSchema } from './EnumActivityStatusWithAggregatesFilter.schema';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';
import { EnumModalityNullableWithAggregatesFilterObjectSchema } from './EnumModalityNullableWithAggregatesFilter.schema';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ActivityScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		category: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		location: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		prerequisites: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		startDate: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		endDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
		enrollmentStart: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		enrollmentEnd: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		contact: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		faculty: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		targetAudience: z
			.union([
				z.lazy(() => EnumTargetAudienceWithAggregatesFilterObjectSchema),
				z.lazy(() => TargetAudienceSchema)
			])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityWithAggregatesFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => EnumActivityStatusWithAggregatesFilterObjectSchema),
				z.lazy(() => ActivityStatusSchema)
			])
			.optional(),
		modality: z
			.union([
				z.lazy(() => EnumModalityNullableWithAggregatesFilterObjectSchema),
				z.lazy(() => ModalitySchema)
			])
			.optional()
			.nullable(),
		proponentId: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		projectId: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional()
	})
	.strict();

export const ActivityScalarWhereWithAggregatesInputObjectSchema = Schema;
