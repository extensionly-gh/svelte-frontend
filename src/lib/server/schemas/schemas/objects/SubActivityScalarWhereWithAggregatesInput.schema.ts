import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEventVisibilityWithAggregatesFilterObjectSchema } from './EnumEventVisibilityWithAggregatesFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumModalityWithAggregatesFilterObjectSchema } from './EnumModalityWithAggregatesFilter.schema';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SubActivityScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => SubActivityScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => SubActivityScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SubActivityScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => SubActivityScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		description: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		startDate: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		endDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()]).optional(),
		location: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityWithAggregatesFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		modality: z
			.union([
				z.lazy(() => EnumModalityWithAggregatesFilterObjectSchema),
				z.lazy(() => ModalitySchema)
			])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		activityId: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional()
	})
	.strict();

export const SubActivityScalarWhereWithAggregatesInputObjectSchema = Schema;
