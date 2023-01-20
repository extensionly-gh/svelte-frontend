import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorMinAggregateInputType> = z
	.object({
		id: z.literal(true).optional(),
		userId: z.literal(true).optional(),
		subActivityId: z.literal(true).optional(),
		createdAt: z.literal(true).optional(),
		updatedAt: z.literal(true).optional(),
		invitationStatus: z.literal(true).optional()
	})
	.strict();

export const UserInstructorMinAggregateInputObjectSchema = Schema;
