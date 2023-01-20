import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityMaxOrderByAggregateInput> = z
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
		updatedAt: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const ActivityMaxOrderByAggregateInputObjectSchema = Schema;
