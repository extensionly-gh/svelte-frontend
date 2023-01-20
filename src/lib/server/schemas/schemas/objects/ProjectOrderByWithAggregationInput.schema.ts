import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectCountOrderByAggregateInputObjectSchema } from './ProjectCountOrderByAggregateInput.schema';
import { ProjectMaxOrderByAggregateInputObjectSchema } from './ProjectMaxOrderByAggregateInput.schema';
import { ProjectMinOrderByAggregateInputObjectSchema } from './ProjectMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		programId: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		acceptStudentsProposals: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => ProjectCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ProjectMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ProjectMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const ProjectOrderByWithAggregationInputObjectSchema = Schema;
