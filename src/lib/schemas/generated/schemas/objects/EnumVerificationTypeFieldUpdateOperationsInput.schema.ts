import { z } from 'zod';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumVerificationTypeFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => VerificationTypeSchema).optional()
	})
	.strict();

export const EnumVerificationTypeFieldUpdateOperationsInputObjectSchema = Schema;
