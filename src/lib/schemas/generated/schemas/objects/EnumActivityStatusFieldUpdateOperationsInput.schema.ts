import { z } from 'zod';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumActivityStatusFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => ActivityStatusSchema).optional()
	})
	.strict();

export const EnumActivityStatusFieldUpdateOperationsInputObjectSchema = Schema;
