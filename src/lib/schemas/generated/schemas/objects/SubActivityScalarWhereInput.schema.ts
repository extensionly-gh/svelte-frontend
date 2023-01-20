import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEventVisibilityFilterObjectSchema } from './EnumEventVisibilityFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumModalityFilterObjectSchema } from './EnumModalityFilter.schema';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => SubActivityScalarWhereInputObjectSchema),
				z.lazy(() => SubActivityScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => SubActivityScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => SubActivityScalarWhereInputObjectSchema),
				z.lazy(() => SubActivityScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		startDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		endDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		location: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		modality: z
			.union([z.lazy(() => EnumModalityFilterObjectSchema), z.lazy(() => ModalitySchema)])
			.optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		activityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
	})
	.strict();

export const SubActivityScalarWhereInputObjectSchema = Schema;
