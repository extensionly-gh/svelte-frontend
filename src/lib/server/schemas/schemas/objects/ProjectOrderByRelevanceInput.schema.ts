import { z } from 'zod';
import { ProjectOrderByRelevanceFieldEnumSchema } from '../enums/ProjectOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => ProjectOrderByRelevanceFieldEnumSchema),
			z.lazy(() => ProjectOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const ProjectOrderByRelevanceInputObjectSchema = Schema;
