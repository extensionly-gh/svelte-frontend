import { z } from 'zod';
import { ActivityCreateManyProjectInputObjectSchema } from './ActivityCreateManyProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateManyProjectInputEnvelope> = z
	.object({
		data: z.lazy(() => ActivityCreateManyProjectInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const ActivityCreateManyProjectInputEnvelopeObjectSchema = Schema;
