import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActivityCountOrderByAggregateInputObjectSchema } from './ActivityCountOrderByAggregateInput.schema';
import { ActivityMaxOrderByAggregateInputObjectSchema } from './ActivityMaxOrderByAggregateInput.schema';
import { ActivityMinOrderByAggregateInputObjectSchema } from './ActivityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		title: z.lazy(() => SortOrderSchema).optional(),
		description: z.lazy(() => SortOrderSchema).optional(),
		category: z.lazy(() => SortOrderSchema).optional(),
		location: z.lazy(() => SortOrderSchema).optional(),
		prerequisites: z.lazy(() => SortOrderSchema).optional(),
		startDate: z.lazy(() => SortOrderSchema).optional(),
		endDate: z.lazy(() => SortOrderSchema).optional(),
		enrollmentStart: z.lazy(() => SortOrderSchema).optional(),
		enrollmentEnd: z.lazy(() => SortOrderSchema).optional(),
		contact: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		targetAudience: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		modality: z.lazy(() => SortOrderSchema).optional(),
		proponentId: z.lazy(() => SortOrderSchema).optional(),
		projectId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => ActivityCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ActivityMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ActivityMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const ActivityOrderByWithAggregationInputObjectSchema = Schema;
