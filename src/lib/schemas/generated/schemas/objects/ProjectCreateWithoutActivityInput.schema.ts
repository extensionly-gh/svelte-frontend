import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ProgramCreateNestedOneWithoutProjectInputObjectSchema } from './ProgramCreateNestedOneWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateWithoutActivityInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		faculty: z.string(),
		acceptStudentsProposals: z.boolean(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		visibility: z.lazy(() => EventVisibilitySchema).optional(),
		Program: z.lazy(() => ProgramCreateNestedOneWithoutProjectInputObjectSchema).optional()
	})
	.strict();

export const ProjectCreateWithoutActivityInputObjectSchema = Schema;
