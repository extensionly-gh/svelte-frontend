import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';
import { NestedEnumModalityNullableFilterObjectSchema } from './NestedEnumModalityNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumModalityNullableFilter> = z
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
				z.lazy(() => NestedEnumModalityNullableFilterObjectSchema)
			])
			.optional()
			.nullable()
	})
	.strict();

export const EnumModalityNullableFilterObjectSchema = Schema;
