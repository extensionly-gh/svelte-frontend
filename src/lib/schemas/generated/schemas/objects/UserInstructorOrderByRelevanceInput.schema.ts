import { z } from 'zod';
import { UserInstructorOrderByRelevanceFieldEnumSchema } from '../enums/UserInstructorOrderByRelevanceFieldEnum.schema';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorOrderByRelevanceInput> = z
	.object({
		fields: z.union([
			z.lazy(() => UserInstructorOrderByRelevanceFieldEnumSchema),
			z.lazy(() => UserInstructorOrderByRelevanceFieldEnumSchema).array()
		]),
		sort: z.lazy(() => SortOrderSchema),
		search: z.string()
	})
	.strict();

export const UserInstructorOrderByRelevanceInputObjectSchema = Schema;
