import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ActivityOrderByRelationAggregateInputObjectSchema } from './ActivityOrderByRelationAggregateInput.schema';
import { ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema } from './ProgramOrderByWithRelationAndSearchRelevanceInput.schema';
import { ProjectOrderByRelevanceInputObjectSchema } from './ProjectOrderByRelevanceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByWithRelationAndSearchRelevanceInput> = z
	.object({
		id: z.lazy(() => SortOrderSchema).optional(),
		name: z.lazy(() => SortOrderSchema).optional(),
		programId: z.lazy(() => SortOrderSchema).optional(),
		faculty: z.lazy(() => SortOrderSchema).optional(),
		acceptStudentsProposals: z.lazy(() => SortOrderSchema).optional(),
		createdAt: z.lazy(() => SortOrderSchema).optional(),
		updatedAt: z.lazy(() => SortOrderSchema).optional(),
		visibility: z.lazy(() => SortOrderSchema).optional(),
		Activity: z.lazy(() => ActivityOrderByRelationAggregateInputObjectSchema).optional(),
		Program: z.lazy(() => ProgramOrderByWithRelationAndSearchRelevanceInputObjectSchema).optional(),
		_relevance: z.lazy(() => ProjectOrderByRelevanceInputObjectSchema).optional()
	})
	.strict();

export const ProjectOrderByWithRelationAndSearchRelevanceInputObjectSchema = Schema;
