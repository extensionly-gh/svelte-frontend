import { z } from 'zod';
import { UserCreateNestedOneWithoutUserEnrollmentsInputObjectSchema } from './UserCreateNestedOneWithoutUserEnrollmentsInput.schema';
import { ActivityCreateNestedOneWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateNestedOneWithoutUserEnrollmentsInput.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateInput> = z
	.object({
		id: z.string().optional(),
		User: z.lazy(() => UserCreateNestedOneWithoutUserEnrollmentsInputObjectSchema),
		Activity: z.lazy(() => ActivityCreateNestedOneWithoutUserEnrollmentsInputObjectSchema),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		status: z.lazy(() => EnrollmentStatusSchema).optional()
	})
	.strict();

export const UserEnrollmentsCreateInputObjectSchema = Schema;
