import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { NestedEnumEventVisibilityWithAggregatesFilterObjectSchema } from './NestedEnumEventVisibilityWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumEventVisibilityFilterObjectSchema } from './NestedEnumEventVisibilityFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEventVisibilityWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => EventVisibilitySchema).optional(),
		in: z
			.lazy(() => EventVisibilitySchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => EventVisibilitySchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => EventVisibilitySchema),
				z.lazy(() => NestedEnumEventVisibilityWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumEventVisibilityFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumEventVisibilityFilterObjectSchema).optional()
	})
	.strict();

export const EnumEventVisibilityWithAggregatesFilterObjectSchema = Schema;
