import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ProjectUncheckedCreateNestedManyWithoutProgramInputObjectSchema } from './ProjectUncheckedCreateNestedManyWithoutProgramInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		faculty: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		visibility: z.lazy(() => EventVisibilitySchema).optional(),
		Project: z
			.lazy(() => ProjectUncheckedCreateNestedManyWithoutProgramInputObjectSchema)
			.optional()
	})
	.strict();

export const ProgramUncheckedCreateInputObjectSchema = Schema;
