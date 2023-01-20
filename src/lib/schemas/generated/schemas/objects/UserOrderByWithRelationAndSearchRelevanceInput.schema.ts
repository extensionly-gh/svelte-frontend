import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { VerificationOrderByRelationAggregateInputObjectSchema } from './VerificationOrderByRelationAggregateInput.schema';
import { UserEnrollmentsOrderByRelationAggregateInputObjectSchema } from './UserEnrollmentsOrderByRelationAggregateInput.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema';
import { UserInstructorOrderByRelationAggregateInputObjectSchema } from './UserInstructorOrderByRelationAggregateInput.schema';
import { UserOrderByRelevanceInputObjectSchema } from './UserOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		email: z.lazy(() => SortOrderSchema).optional(),
		password: z.lazy(() => SortOrderSchema).optional(),
		phone: z.lazy(() => SortOrderSchema).optional(),
		image: z.lazy(() => SortOrderSchema).optional(),
		isPreRegistration: z.lazy(() => SortOrderSchema).optional(),
		role: z.lazy(() => SortOrderSchema).optional(),
		isTermsAccepted: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		Verification: z.lazy(() => VerificationOrderByRelationAggregateInputObjectSchema).optional(),
		UserEnrollments: z
			.lazy(() => UserEnrollmentsOrderByRelationAggregateInputObjectSchema)
			.optional(),
		Activity: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional(),
		UserInstructor: z
			.lazy(() => UserInstructorOrderByRelationAggregateInputObjectSchema)
			.optional(),
		_relevance: z.lazy(() => UserOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const UserOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
