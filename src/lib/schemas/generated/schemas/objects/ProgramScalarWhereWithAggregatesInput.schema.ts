import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEventVisibilityWithAggregatesFilterObjectSchema } from './EnumEventVisibilityWithAggregatesFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ProgramScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ProgramScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ProgramScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ProgramScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ProgramScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		faculty: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityWithAggregatesFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional()
	})
	.strict();

export const ProgramScalarWhereWithAggregatesInputObjectSchema = Schema;
