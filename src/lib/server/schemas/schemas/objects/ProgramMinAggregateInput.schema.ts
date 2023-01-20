import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		faculty: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		visibility: z.literal(true).optional()
	})
	.strict();

export const ProgramMinAggregateInputObjectSchema = Schema;
