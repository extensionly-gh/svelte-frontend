import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { EnumTargetAudienceFieldUpdateOperationsInputObjectSchema } from './EnumTargetAudienceFieldUpdateOperationsInput.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumEventVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumEventVisibilityFieldUpdateOperationsInput.schema';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';
import { EnumActivityStatusFieldUpdateOperationsInputObjectSchema } from './EnumActivityStatusFieldUpdateOperationsInput.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { NullableEnumModalityFieldUpdateOperationsInputObjectSchema } from './NullableEnumModalityFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateManyMutationInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		title: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		description: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		category: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		location: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		prerequisites: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		startDate: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		endDate: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		enrollmentStart: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		enrollmentEnd: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		contact: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		faculty: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		targetAudience: z
			.union([
				z.lazy(() => TargetAudienceSchema),
				z.lazy(() => EnumTargetAudienceFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EventVisibilitySchema),
				z.lazy(() => EnumEventVisibilityFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		status: z
			.union([
				z.lazy(() => ActivityStatusSchema),
				z.lazy(() => EnumActivityStatusFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		modality: z
			.union([
				z.lazy(() => ModalitySchema),
				z.lazy(() => NullableEnumModalityFieldUpdateOperationsInputObjectSchema)
			])
			.optional()
			.nullable(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional()
	})
	.strict();

export const ActivityUpdateManyMutationInputObjectSchema = Schema;
