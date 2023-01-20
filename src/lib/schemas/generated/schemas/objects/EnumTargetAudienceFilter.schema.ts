import { z } from 'zod';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { NestedEnumTargetAudienceFilterObjectSchema } from './NestedEnumTargetAudienceFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTargetAudienceFilter> = z
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
				z.lazy(() => NestedEnumTargetAudienceFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const EnumTargetAudienceFilterObjectSchema = Schema;
