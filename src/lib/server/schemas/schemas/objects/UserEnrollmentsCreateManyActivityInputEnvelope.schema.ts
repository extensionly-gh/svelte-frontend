import { z } from 'zod';
import { UserEnrollmentsCreateManyActivityInputObjectSchema } from './UserEnrollmentsCreateManyActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateManyActivityInputEnvelope> = z
	.object({
		data: z.lazy(() => UserEnrollmentsCreateManyActivityInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const UserEnrollmentsCreateManyActivityInputEnvelopeObjectSchema = Schema;
