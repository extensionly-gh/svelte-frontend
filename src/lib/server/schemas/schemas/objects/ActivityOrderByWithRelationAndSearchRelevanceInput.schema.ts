import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserEnrollmentsOrderByRelationAggregateInputObjectSchema } from './UserEnrollmentsOrderByRelationAggregateInput.schema';
import { SubActivityOrderByRelationAggregateInputObjectSchema } from './SubActivityOrderByRelationAggregateInput.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ProjectOrderByWithRelationAndSearchRelevanceInput.schema';
import { ActivityOrderByRelevanceInputObjectSchema } from './ActivityOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityOrderByWithRelationAndSearchRelevanceInput> = z
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
		UserEnrollments: z
			.lazy(() => UserEnrollmentsOrderByRelationAggregateInputObjectSchema)
			.optional(),
		SubActivity: z.lazy(() => SubActivityOrderByRelationAggregateInputObjectSchema).optional(),
		User: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		Project: z.lazy(() => ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		_relevance: z.lazy(() => ActivityOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
