import { z } from 'zod';
import { UserEnrollmentsOrderByRelevanceFieldEnumSchema } from '../enums/UserEnrollmentsOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => UserEnrollmentsOrderByRelevanceFieldEnumSchema),
			z.lazy(() => UserEnrollmentsOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const UserEnrollmentsOrderByRelevanceInputObjectSchema = Schema;
