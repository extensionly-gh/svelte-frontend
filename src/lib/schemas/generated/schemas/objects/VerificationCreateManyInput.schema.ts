import { z } from 'zod';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationCreateManyInput> = z
	.object({
		id: z.string().optional(),
		userId: z.string(),
		token: z.string().optional().nullable(),
		type: z.lazy(() => VerificationTypeSchema),
		isVerified: z.boolean().optional(),
		liftCooldownAt: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional()
	})
	.strict();

export const VerificationCreateManyInputObjectSchema = Schema;
