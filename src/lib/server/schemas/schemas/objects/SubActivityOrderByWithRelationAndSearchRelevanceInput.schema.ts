import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserInstructorOrderByRelationAggregateInputObjectSchema } from './UserInstructorOrderByRelationAggregateInput.schema';
import { SubActivityOrderByRelevanceInputObjectSchema } from './SubActivityOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityOrderByWithRelationAndSearchRelevanceInput> = z
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
		Activity: z
			.lazy(() => ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema)
			.optional(),
		UserInstructor: z
			.lazy(() => UserInstructorOrderByRelationAggregateInputObjectSchema)
			.optional(),
		_relevance: z.lazy(() => SubActivityOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
