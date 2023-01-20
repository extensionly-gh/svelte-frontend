import { z } from 'zod';
import { ModalitySchema } from '../enums/Modality.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumModalityFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => ModalitySchema).optional()
	})
	.strict();

export const EnumModalityFieldUpdateOperationsInputObjectSchema = Schema;
