import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumEventVisibilityFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => EventVisibilitySchema).optional()
	})
	.strict();

export const EnumEventVisibilityFieldUpdateOperationsInputObjectSchema = Schema;
