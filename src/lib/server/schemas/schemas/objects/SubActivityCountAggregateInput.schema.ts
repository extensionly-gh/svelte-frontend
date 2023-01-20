import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		name: z.literal(true).optional(),
		description: z.literal(true).optional(),
		startDate: z.literal(true).optional(),
		endDate: z.literal(true).optional(),
		location: z.literal(true).optional(),
		visibility: z.literal(true).optional(),
		modality: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		activityId: z.literal(true).optional(),
		_all: z.literal(true).optional()
	})
	.strict();

export const SubActivityCountAggregateInputObjectSchema = Schema;
