import { z } from 'zod';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEnrollmentStatusFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => EnrollmentStatusSchema).optional()
	})
	.strict();

export const EnumEnrollmentStatusFieldUpdateOperationsInputObjectSchema = Schema;
