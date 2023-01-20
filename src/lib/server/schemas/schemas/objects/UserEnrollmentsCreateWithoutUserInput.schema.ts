import { z } from 'zod';
import { ActivityCreateNestedOneWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateNestedOneWithoutUserEnrollmentsInput.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		Activity: z.lazy(() => ActivityCreateNestedOneWithoutUserEnrollmentsInputObjectSchema),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		status: z.lazy(() => EnrollmentStatusSchema).optional()
	})
	.strict();

export const UserEnrollmentsCreateWithoutUserInputObjectSchema = Schema;
