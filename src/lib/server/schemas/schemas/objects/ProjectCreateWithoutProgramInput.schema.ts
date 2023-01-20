import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ActivityCreateNestedManyWithoutProjectInputObjectSchema } from './ActivityCreateNestedManyWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateWithoutProgramInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		faculty: z.string(),
		acceptStudentsProposals: z.boolean(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		visibility: z.lazy(() => EventVisibilitySchema).optional(),
		Activity: z.lazy(() => ActivityCreateNestedManyWithoutProjectInputObjectSchema).optional()
	})
	.strict();

export const ProjectCreateWithoutProgramInputObjectSchema = Schema;
