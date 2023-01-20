import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.NullableEnumModalityFieldUpdateOperationsInput> = z
	.object({
		set: z
			.lazy(() => ModalitySchema)
			.optional()
			.nullable()
	})
	.strict();

export const NullableEnumModalityFieldUpdateOperationsInputObjectSchema = Schema;
