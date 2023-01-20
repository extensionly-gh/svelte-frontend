import { z } from 'zod';
import { UserEnrollmentsCreateManyUserInputObjectSchema } from './UserEnrollmentsCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => UserEnrollmentsCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const UserEnrollmentsCreateManyUserInputEnvelopeObjectSchema = Schema;
