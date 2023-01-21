import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumEventVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumEventVisibilityFieldUpdateOperationsInput.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { EnumModalityFieldUpdateOperationsInputObjectSchema } from './EnumModalityFieldUpdateOperationsInput.schema';
import { ActivityUpdateOneRequiredWithoutSubActivityNestedInputObjectSchema } from './ActivityUpdateOneRequiredWithoutSubActivityNestedInput.schema';
import { UserInstructorUpdateManyWithoutSubActivityNestedInputObjectSchema } from './UserInstructorUpdateManyWithoutSubActivityNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpdateInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		description: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		startDate: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		endDate: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		location: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EventVisibilitySchema),
				z.lazy(() => EnumEventVisibilityFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		modality: z
			.union([
				z.lazy(() => ModalitySchema),
				z.lazy(() => EnumModalityFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		Activity: z
			.lazy(() => ActivityUpdateOneRequiredWithoutSubActivityNestedInputObjectSchema)
			.optional(),
		UserInstructor: z
			.lazy(() => UserInstructorUpdateManyWithoutSubActivityNestedInputObjectSchema)
			.optional()
	})
	.strict();

export const SubActivityUpdateInputObjectSchema = Schema;
