import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumModalityFilterObjectSchema } from './NestedEnumModalityFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumModalityWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => ModalitySchema).optional(),
		in: z
			.lazy(() => ModalitySchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => ModalitySchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => ModalitySchema),
				z.lazy(() => NestedEnumModalityWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumModalityFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumModalityFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumModalityWithAggregatesFilterObjectSchema = Schema;
