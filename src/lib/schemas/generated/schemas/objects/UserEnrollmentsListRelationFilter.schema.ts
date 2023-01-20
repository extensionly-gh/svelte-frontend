import { z } from 'zod';
import { UserEnrollmentsWhereInputObjectSchema } from './UserEnrollmentsWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsListRelationFilter> = z
	.object({
		every: z.lazy(() => UserEnrollmentsWhereInputObjectSchema).optional(),
		some: z.lazy(() => UserEnrollmentsWhereInputObjectSchema).optional(),
		none: z.lazy(() => UserEnrollmentsWhereInputObjectSchema).optional()
	})
	.strict();

export const UserEnrollmentsListRelationFilterObjectSchema = Schema;
