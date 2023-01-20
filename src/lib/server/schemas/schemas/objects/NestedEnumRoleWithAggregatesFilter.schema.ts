import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumRoleFilterObjectSchema } from './NestedEnumRoleFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumRoleWithAggregatesFilter> = z
	.object({
		equals: z.lazy(() => RoleSchema).optional(),
		in: z
			.lazy(() => RoleSchema)
			.array()
			.optional(),
		notIn: z
			.lazy(() => RoleSchema)
			.array()
			.optional(),
		not: z
			.union([
				z.lazy(() => RoleSchema),
				z.lazy(() => NestedEnumRoleWithAggregatesFilterObjectSchema)
			])
			.optional(),
		_count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
		_min: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional(),
		_max: z.lazy(() => NestedEnumRoleFilterObjectSchema).optional()
	})
	.strict();

export const NestedEnumRoleWithAggregatesFilterObjectSchema = Schema;
