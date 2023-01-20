import { z } from 'zod';
import { UserInstructorWhereInputObjectSchema } from './UserInstructorWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorListRelationFilter> = z
	.object({
		every: z.lazy(() => UserInstructorWhereInputObjectSchema).optional(),
		some: z.lazy(() => UserInstructorWhereInputObjectSchema).optional(),
		none: z.lazy(() => UserInstructorWhereInputObjectSchema).optional()
	})
	.strict();

export const UserInstructorListRelationFilterObjectSchema = Schema;
