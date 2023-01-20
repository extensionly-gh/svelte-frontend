import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProjectOrderByRelationAggregateInputObjectSchema } from './ProjectOrderByRelationAggregateInput.schema';
import { ProgramOrderByRelevanceInputObjectSchema } from './ProgramOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		Project: z.lazy(() => ProjectOrderByRelationAggregateInputObjectSchema).optional(),
		_relevance: z.lazy(() => ProgramOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
