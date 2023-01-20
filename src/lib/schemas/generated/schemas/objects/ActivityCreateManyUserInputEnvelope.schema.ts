import { z } from 'zod';
import { ActivityCreateManyUserInputObjectSchema } from './ActivityCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => ActivityCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const ActivityCreateManyUserInputEnvelopeObjectSchema = Schema;
