import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumEventVisibilityFilter> = z
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
				z.lazy(() => NestedEnumEventVisibilityFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const NestedEnumEventVisibilityFilterObjectSchema = Schema;
