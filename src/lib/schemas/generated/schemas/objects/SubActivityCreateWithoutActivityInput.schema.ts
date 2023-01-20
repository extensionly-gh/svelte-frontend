import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { UserInstructorCreateNestedManyWithoutSubActivityInputObjectSchema } from './UserInstructorCreateNestedManyWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateWithoutActivityInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		description: z.string(),
		startDate: z.date(),
		endDate: z.date(),
		location: z.string(),
		visibility: z.lazy(() => EventVisibilitySchema).optional(),
		modality: z.lazy(() => ModalitySchema).optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		UserInstructor: z
			.lazy(() => UserInstructorCreateNestedManyWithoutSubActivityInputObjectSchema)
			.optional()
	})
	.strict();

export const SubActivityCreateWithoutActivityInputObjectSchema = Schema;
