import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProgramCountOrderByAggregateInputObjectSchema } from './ProgramCountOrderByAggregateInput.schema';
import { ProgramMaxOrderByAggregateInputObjectSchema } from './ProgramMaxOrderByAggregateInput.schema';
import { ProgramMinOrderByAggregateInputObjectSchema } from './ProgramMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramOrderByWithAggregationInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		_count: z.lazy(() => ProgramCountOrderByAggregateInputObjectSchema).optional(),
		_max: z.lazy(() => ProgramMaxOrderByAggregateInputObjectSchema).optional(),
		_min: z.lazy(() => ProgramMinOrderByAggregateInputObjectSchema).optional()
	})
	.strict();

export const ProgramOrderByWithAggregationInputObjectSchema = Schema;
