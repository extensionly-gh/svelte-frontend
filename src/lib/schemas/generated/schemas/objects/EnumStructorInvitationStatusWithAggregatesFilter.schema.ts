import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';
import { NestedEnumStructorInvitationStatusWithAggregatesFilterObjectSchema } from './NestedEnumStructorInvitationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumStructorInvitationStatusFilterObjectSchema } from './NestedEnumStructorInvitationStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumStructorInvitationStatusWithAggregatesFilter> = z
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
				z.lazy(() => NestedEnumStructorInvitationStatusWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumStructorInvitationStatusFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumStructorInvitationStatusFilterObjectSchema).optional()
	})
	.strict();

export const EnumStructorInvitationStatusWithAggregatesFilterObjectSchema = Schema;
