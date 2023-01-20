import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumStructorInvitationStatusFilter> = z
	.object({
		equals: z.lazy(() => StructorInvitationStatusSchema).optional(),
		in: z
			.lazy(() => StructorInvitationStatusSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => StructorInvitationStatusSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => StructorInvitationStatusSchema),
				z.lazy(() => NestedEnumStructorInvitationStatusFilterObjectSchema)
			])
			.optional()
	})
	.strict();

export const NestedEnumStructorInvitationStatusFilterObjectSchema = Schema;
