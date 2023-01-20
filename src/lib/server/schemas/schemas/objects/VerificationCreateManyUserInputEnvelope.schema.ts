import { z } from 'zod';
import { VerificationCreateManyUserInputObjectSchema } from './VerificationCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => VerificationCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const VerificationCreateManyUserInputEnvelopeObjectSchema = Schema;
