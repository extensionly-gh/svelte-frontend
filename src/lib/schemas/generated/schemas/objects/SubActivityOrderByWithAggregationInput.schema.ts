import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SubActivityCountOrderByAggregateInputObjectSchema } from './SubActivityCountOrderByAggregateInput.schema';
import { SubActivityMaxOrderByAggregateInputObjectSchema } from './SubActivityMaxOrderByAggregateInput.schema';
import { SubActivityMinOrderByAggregateInputObjectSchema } from './SubActivityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		startDate: z.lazy(() => SortOrderSchema).optional(),
		endDate: z.lazy(() => SortOrderSchema).optional(),
		location: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		modality: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		activityId: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => SubActivityCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => SubActivityMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => SubActivityMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const SubActivityOrderByWithAggregationInputObjectSchema = Schema;
