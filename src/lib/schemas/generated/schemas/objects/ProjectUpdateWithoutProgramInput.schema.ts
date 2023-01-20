import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { EnumEventVisibilityFieldUpdateOperationsInputObjectSchema } from './EnumEventVisibilityFieldUpdateOperationsInput.schema';
import { ActivityUpdateManyWithoutProjectNestedInputObjectSchema } from './ActivityUpdateManyWithoutProjectNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateWithoutProgramInput> = z
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
		acceptStudentsProposals: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
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
		Activity: z.lazy(() => ActivityUpdateManyWithoutProjectNestedInputObjectSchema).optional()
	})
	.strict();

export const ProjectUpdateWithoutProgramInputObjectSchema = Schema;
