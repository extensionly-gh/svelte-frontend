import { z } from 'zod';
import { SubActivityCreateManyActivityInputObjectSchema } from './SubActivityCreateManyActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateManyActivityInputEnvelope> = z
	.object({
		data: z.lazy(() => SubActivityCreateManyActivityInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const SubActivityCreateManyActivityInputEnvelopeObjectSchema = Schema;
