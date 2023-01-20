import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationMaxOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		isVerified: z.lazy(() => SortOrderSchema).optional(),
		liftCooldownAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const VerificationMaxOrderByAggregateInputObjectSchema = Schema;
