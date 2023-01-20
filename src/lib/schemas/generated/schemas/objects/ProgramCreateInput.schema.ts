import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ProjectCreateNestedManyWithoutProgramInputObjectSchema } from './ProjectCreateNestedManyWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		faculty: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		visibility: z.lazy(() => EventVisibilitySchema).optional(),
		Project: z.lazy(() => ProjectCreateNestedManyWithoutProgramInputObjectSchema).optional()
	})
	.strict();

export const ProgramCreateInputObjectSchema = Schema;
