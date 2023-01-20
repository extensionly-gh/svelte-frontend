import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NestedEnumRoleFilter> = z
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
			.union([z.lazy(() => RoleSchema), z.lazy(() => NestedEnumRoleFilterObjectSchema)])
			.optional()
	})
	.strict();

export const NestedEnumRoleFilterObjectSchema = Schema;
