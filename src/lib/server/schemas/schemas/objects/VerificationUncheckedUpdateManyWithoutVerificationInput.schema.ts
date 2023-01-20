import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';
import { EnumVerificationTypeFieldUpdateOperationsInputObjectSchema } from './EnumVerificationTypeFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUncheckedUpdateManyWithoutVerificationInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		token: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		type: z
			.union([
				z.lazy(() => VerificationTypeSchema),
				z.lazy(() => EnumVerificationTypeFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		isVerified: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		liftCooldownAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional()
	})
	.strict();

export const VerificationUncheckedUpdateManyWithoutVerificationInputObjectSchema = Schema;
