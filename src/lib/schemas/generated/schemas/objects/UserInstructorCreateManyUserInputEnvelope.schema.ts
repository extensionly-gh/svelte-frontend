import { z } from 'zod';
import { UserInstructorCreateManyUserInputObjectSchema } from './UserInstructorCreateManyUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateManyUserInputEnvelope> = z
	.object({
		data: z.lazy(() => UserInstructorCreateManyUserInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const UserInstructorCreateManyUserInputEnvelopeObjectSchema = Schema;
