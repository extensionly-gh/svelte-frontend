import { z } from 'zod';
import { ProgramOrderByRelevanceFieldEnumSchema } from '../enums/ProgramOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => ProgramOrderByRelevanceFieldEnumSchema),
			z.lazy(() => ProgramOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const ProgramOrderByRelevanceInputObjectSchema = Schema;
