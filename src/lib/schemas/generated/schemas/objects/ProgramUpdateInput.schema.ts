import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumEventVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumEventVisibilityFieldUpdateOperationsInput.schema';
import { ProjectUpdateManyWithoutProgramNestedInputObjectSchema } from './ProjectUpdateManyWithoutProgramNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpdateInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		faculty: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EventVisibilitySchema),
				z.lazy(() => EnumEventVisibilityFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		Project: z.lazy(() => ProjectUpdateManyWithoutProgramNestedInputObjectSchema).optional()
	})
	.strict();

export const ProgramUpdateInputObjectSchema = Schema;
