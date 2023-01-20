import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z
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
		updatedAt: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const UserCountOrderByAggregateInputObjectSchema = Schema;
