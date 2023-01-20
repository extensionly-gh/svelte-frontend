import { z } from 'zod';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumTargetAudienceFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => TargetAudienceSchema).optional()
	})
	.strict();

export const EnumTargetAudienceFieldUpdateOperationsInputObjectSchema = Schema;
