import { z } from 'zod';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumVerificationTypeFilter> = z
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
				z.lazy(() => NestedEnumVerificationTypeFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const NestedEnumVerificationTypeFilterObjectSchema = Schema;
