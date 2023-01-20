import { z } from 'zod';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';
import { NestedEnumVerificationTypeWithAggregatesFilterObjectSchema } from './NestedEnumVerificationTypeWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumVerificationTypeFilterObjectSchema } from './NestedEnumVerificationTypeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVerificationTypeWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => VerificationTypeSchema).optional(),
		in: z
			.lazy(() => VerificationTypeSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => VerificationTypeSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => VerificationTypeSchema),
				z.lazy(() => NestedEnumVerificationTypeWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumVerificationTypeFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumVerificationTypeFilterObjectSchema).optional()
	})
	.strict();

export const EnumVerificationTypeWithAggregatesFilterObjectSchema = Schema;
