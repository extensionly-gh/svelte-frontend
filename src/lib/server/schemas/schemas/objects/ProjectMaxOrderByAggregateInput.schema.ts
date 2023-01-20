import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectMaxOrderByAggregateInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		programId: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		acceptStudentsProposals: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional()
	})
	.strict();

export const ProjectMaxOrderByAggregateInputObjectSchema = Schema;
