import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EnrollmentStatusSchema } from '../enums/EnrollmentStatus.schema';
import { EnumEnrollmentStatusFieldUpdateOperationsInputObjectSchema } from './EnumEnrollmentStatusFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUncheckedUpdateInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		userId: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		activityId: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		status: z
			.union([
				z.lazy(() => EnrollmentStatusSchema),
				z.lazy(() => EnumEnrollmentStatusFieldUpdateOperationsInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsUncheckedUpdateInputObjectSchema = Schema;
