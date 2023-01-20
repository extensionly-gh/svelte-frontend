import { z } from 'zod';
import { UserCreateNestedOneWithoutUserEnrollmentsInputObjectSchema } from './UserCreateNestedOneWithoutUserEnrollmentsInput.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateWithoutActivityInput> = z
	.object({
		id: z.string().optional(),
		User: z.lazy(() => UserCreateNestedOneWithoutUserEnrollmentsInputObjectSchema),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		status: z.lazy(() => EnrollmentStatusSchema).optional()
	})
	.strict();

export const UserEnrollmentsCreateWithoutActivityInputObjectSchema = Schema;
