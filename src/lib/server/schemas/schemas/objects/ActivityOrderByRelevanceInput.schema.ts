import { z } from 'zod';
import { ActivityOrderByRelevanceFieldEnumSchema } from '../enums/ActivityOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema),
			z.lazy(() => ActivityOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const ActivityOrderByRelevanceInputObjectSchema = Schema;
