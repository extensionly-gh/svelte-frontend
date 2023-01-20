import { z } from 'zod';
import { UserInstructorCreateManySubActivityInputObjectSchema } from './UserInstructorCreateManySubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateManySubActivityInputEnvelope> = z
	.object({
		data: z.lazy(() => UserInstructorCreateManySubActivityInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const UserInstructorCreateManySubActivityInputEnvelopeObjectSchema = Schema;
