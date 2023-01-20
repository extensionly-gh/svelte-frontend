import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VerificationCountOrderByAggregateInputObjectSchema } from './VerificationCountOrderByAggregateInput.schema';
import { VerificationMaxOrderByAggregateInputObjectSchema } from './VerificationMaxOrderByAggregateInput.schema';
import { VerificationMinOrderByAggregateInputObjectSchema } from './VerificationMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		isVerified: z.lazy(() => SortOrderSchema).optional(),
		liftCooldownAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => VerificationCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => VerificationMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => VerificationMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const VerificationOrderByWithAggregationInputObjectSchema = Schema;
