import { z } from 'zod';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumTargetAudienceFilterObjectSchema } from './NestedEnumTargetAudienceFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumTargetAudienceWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => TargetAudienceSchema).optional(),
		in: z
			.lazy(() => TargetAudienceSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => TargetAudienceSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => TargetAudienceSchema),
				z.lazy(() => NestedEnumTargetAudienceWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumTargetAudienceFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumTargetAudienceFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumTargetAudienceWithAggregatesFilterObjectSchema = Schema;
