import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';
import { NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumModalityNullableFilterObjectSchema } from './NestedEnumModalityNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumModalityNullableWithAggregatesFilter> = z
	.object({
		equals: z
			.lazy(() => ModalitySchema)
			.optional()
			.nullable(),
		in: z
			.lazy(() => ModalitySchema)
			.array()
			.optional()
			.nullable(),
		notIn: z
			.lazy(() => ModalitySchema)
			.array()
			.optional()
			.nullable(),
		not: z
			.union([
				z.lazy(() => ModalitySchema),
				z.lazy(() => NestedEnumModalityNullableWithAggregatesFilterObjectSchema)
			])
			.optional()
			.nullable(),
		_count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumModalityNullableFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumModalityNullableFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumModalityNullableWithAggregatesFilterObjectSchema = Schema;
