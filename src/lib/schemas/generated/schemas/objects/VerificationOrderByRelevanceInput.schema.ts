import { z } from 'zod';
import { VerificationOrderByRelevanceFieldEnumSchema } from '../enums/VerificationOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => VerificationOrderByRelevanceFieldEnumSchema),
			z.lazy(() => VerificationOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const VerificationOrderByRelevanceInputObjectSchema = Schema;
