import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserEnrollmentsCountOrderByAggregateInputObjectSchema } from './UserEnrollmentsCountOrderByAggregateInput.schema';
import { UserEnrollmentsMaxOrderByAggregateInputObjectSchema } from './UserEnrollmentsMaxOrderByAggregateInput.schema';
import { UserEnrollmentsMinOrderByAggregateInputObjectSchema } from './UserEnrollmentsMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		activityId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => UserEnrollmentsCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => UserEnrollmentsMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => UserEnrollmentsMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const UserEnrollmentsOrderByWithAggregationInputObjectSchema = Schema;
