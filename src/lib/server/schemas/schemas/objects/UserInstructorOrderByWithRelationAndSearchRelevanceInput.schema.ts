import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './SubActivityOrderByWithRelationAndSearchRelevanceInput.schema';
import { UserInstructorOrderByRelevanceInputObjectSchema } from './UserInstructorOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		subActivityId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		invitationStatus: z.lazy(() => SortOrderSchema).optional(),
		User: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		SubActivity: z
			.lazy(() => SubActivityOrderByWithRelationAndSearchRelevanceInputObjectSchema)
			.optional(),
		_relevance: z.lazy(() => UserInstructorOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const UserInstructorOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
