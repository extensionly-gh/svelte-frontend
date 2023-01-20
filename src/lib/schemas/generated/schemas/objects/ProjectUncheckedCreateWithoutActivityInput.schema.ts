import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUncheckedCreateWithoutActivityInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		programId: z.string().optional().nullable(),
		faculty: z.string(),
		acceptStudentsProposals: z.boolean(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		visibility: z.lazy(() => EventVisibilitySchema).optional()
	})
	.strict();

export const ProjectUncheckedCreateWithoutActivityInputObjectSchema = Schema;
