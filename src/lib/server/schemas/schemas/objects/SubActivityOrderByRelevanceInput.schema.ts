import { z } from 'zod';
import { SubActivityOrderByRelevanceFieldEnumSchema } from '../enums/SubActivityOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => SubActivityOrderByRelevanceFieldEnumSchema),
			z.lazy(() => SubActivityOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const SubActivityOrderByRelevanceInputObjectSchema = Schema;
