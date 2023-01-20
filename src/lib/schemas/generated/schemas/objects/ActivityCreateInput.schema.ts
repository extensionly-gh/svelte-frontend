import { z } from 'zod';
import { TargetAudienceSchema } from '../enums/TargetAudience.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ActivityStatusSchema } from '../enums/ActivityStatus.schema';
import { ModalitySchema } from '../enums/Modality.schema';
import { UserEnrollmentsCreateNestedManyWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateNestedManyWithoutActivityInput.schema';
import { SubActivityCreateNestedManyWithoutActivityInputObjectSchema } from './SubActivityCreateNestedManyWithoutActivityInput.schema';
import { UserCreateNestedOneWithoutActivityInputObjectSchema } from './UserCreateNestedOneWithoutActivityInput.schema';
import { ProjectCreateNestedOneWithoutActivityInputObjectSchema } from './ProjectCreateNestedOneWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateInput> = z
	.object({
		id: z.string().optional(),
		title: z.string(),
		description: z.string(),
		category: z.string().optional().nullable(),
		location: z.string().optional().nullable(),
		prerequisites: z.string().optional().nullable(),
		startDate: z.date(),
		endDate: z.date(),
		enrollmentStart: z.date(),
		enrollmentEnd: z.date(),
		contact: z.string().optional().nullable(),
		faculty: z.string(),
		targetAudience: z.lazy(() => TargetAudienceSchema),
		visibility: z.lazy(() => EventVisibilitySchema),
		status: z.lazy(() => ActivityStatusSchema).optional(),
		modality: z
			.lazy(() => ModalitySchema)
			.optional()
			.nullable(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		UserEnrollments: z
			.lazy(() => UserEnrollmentsCreateNestedManyWithoutActivityInputObjectSchema)
			.optional(),
		SubActivity: z
			.lazy(() => SubActivityCreateNestedManyWithoutActivityInputObjectSchema)
			.optional(),
		User: z.lazy(() => UserCreateNestedOneWithoutActivityInputObjectSchema),
		Project: z.lazy(() => ProjectCreateNestedOneWithoutActivityInputObjectSchema)
	})
	.strict();

export const ActivityCreateInputObjectSchema = Schema;
