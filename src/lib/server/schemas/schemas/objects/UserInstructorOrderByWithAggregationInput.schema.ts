import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserInstructorCountOrderByAggregateInputObjectSchema } from './UserInstructorCountOrderByAggregateInput.schema';
import { UserInstructorMaxOrderByAggregateInputObjectSchema } from './UserInstructorMaxOrderByAggregateInput.schema';
import { UserInstructorMinOrderByAggregateInputObjectSchema } from './UserInstructorMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		subActivityId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		invitationStatus: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => UserInstructorCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => UserInstructorMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => UserInstructorMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const UserInstructorOrderByWithAggregationInputObjectSchema = Schema;
