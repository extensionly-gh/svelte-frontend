import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCountOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		userId: z.lazy(() => SortOrderSchema).optional(),
		subActivityId: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		invitationStatus: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const UserInstructorCountOrderByAggregateInputObjectSchema = Schema;
