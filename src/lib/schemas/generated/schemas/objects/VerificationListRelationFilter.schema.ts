import { z } from 'zod';
import { VerificationWhereInputObjectSchema } from './VerificationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationListRelationFilter> = z
	.object({
		every: z.lazy(() => VerificationWhereInputObjectSchema).optional(),
		some: z.lazy(() => VerificationWhereInputObjectSchema).optional(),
		none: z.lazy(() => VerificationWhereInputObjectSchema).optional()
	})
	.strict();

export const VerificationListRelationFilterObjectSchema = Schema;
