import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';
import { NestedEnumModalityFilterObjectSchema } from './NestedEnumModalityFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumModalityFilter> = z
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
			.union([z.lazy(() => ModalitySchema), z.lazy(() => NestedEnumModalityFilterObjectSchema)])
			.optional()
	})
	.strict();

export const EnumModalityFilterObjectSchema = Schema;
