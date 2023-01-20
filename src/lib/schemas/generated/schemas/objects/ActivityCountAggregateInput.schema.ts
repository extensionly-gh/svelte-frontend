import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCountAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		title: z.literal(true).optional(),
		description: z.literal(true).optional(),
		category: z.literal(true).optional(),
		location: z.literal(true).optional(),
		prerequisites: z.literal(true).optional(),
		startDate: z.literal(true).optional(),
		endDate: z.literal(true).optional(),
		enrollmentStart: z.literal(true).optional(),
		enrollmentEnd: z.literal(true).optional(),
		contact: z.literal(true).optional(),
		faculty: z.literal(true).optional(),
		targetAudience: z.literal(true).optional(),
		visibility: z.literal(true).optional(),
		status: z.literal(true).optional(),
		modality: z.literal(true).optional(),
		proponentId: z.literal(true).optional(),
		projectId: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		_all: z.literal(true).optional()
	})
	.strict();

export const ActivityCountAggregateInputObjectSchema = Schema;
