import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserEnrollmentsOrderByRelevanceInputObjectSchema } from './UserEnrollmentsOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		User: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		Activity: z
			.lazy(() => ActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema)
			.optional(),
		activityId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		status: z.lazy(() => SortOrderSchema).optional(),
		_relevance: z.lazy(() => UserEnrollmentsOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const UserEnrollmentsOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
