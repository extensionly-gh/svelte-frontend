import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumModalityFilter> = z
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

export const NestedEnumModalityFilterObjectSchema = Schema;
