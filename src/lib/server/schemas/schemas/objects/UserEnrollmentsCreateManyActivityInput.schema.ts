import { z } from 'zod';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateManyActivityInput> = z
	.object({
		id: z.string().optional(),
		userId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		status: z.lazy(() => EnrollmentStatusSchema).optional()
	})
	.strict();

export const UserEnrollmentsCreateManyActivityInputObjectSchema = Schema;
