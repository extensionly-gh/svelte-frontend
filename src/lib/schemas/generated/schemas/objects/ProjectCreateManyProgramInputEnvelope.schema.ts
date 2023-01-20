import { z } from 'zod';
import { ProjectCreateManyProgramInputObjectSchema } from './ProjectCreateManyProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateManyProgramInputEnvelope> = z
	.object({
		data: z.lazy(() => ProjectCreateManyProgramInputObjectSchema).array(),
		skipDuplicates: z.boolean().optional()
	})
	.strict();

export const ProjectCreateManyProgramInputEnvelopeObjectSchema = Schema;
