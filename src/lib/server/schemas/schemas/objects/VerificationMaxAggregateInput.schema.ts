import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationMaxAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		token: z.literal(true).optional(),
		type: z.literal(true).optional(),
		isVerified: z.literal(true).optional(),
		liftCooldownAt: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional()
	})
	.strict();

export const VerificationMaxAggregateInputObjectSchema = Schema;
