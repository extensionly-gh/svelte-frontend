import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './UserOrderByWithRelationAndSearchRelevanceInput.schema';
import { VerificationOrderByRelevanceInputObjectSchema } from './VerificationOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		user: z.lazy(() => UserOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		token: z.lazy(() => SortOrderSchema).optional(),
		type: z.lazy(() => SortOrderSchema).optional(),
		isVerified: z.lazy(() => SortOrderSchema).optional(),
		liftCooldownAt: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		_relevance: z.lazy(() => VerificationOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const VerificationOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
