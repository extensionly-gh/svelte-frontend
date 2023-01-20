import { z } from 'zod';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { UserInstructorUncheckedCreateNestedManyWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedCreateNestedManyWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUncheckedCreateInput> = z
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
		activityId: z.string(),
		UserInstructor: z
			.lazy(() => UserInstructorUncheckedCreateNestedManyWithoutSubActivityInputObjectSchema)
			.optional()
	})
	.strict();

export const SubActivityUncheckedCreateInputObjectSchema = Schema;
