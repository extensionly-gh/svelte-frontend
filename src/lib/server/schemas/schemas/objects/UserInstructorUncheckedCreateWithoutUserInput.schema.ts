import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUncheckedCreateWithoutUserInput> = z
	.object({
		id: z.string().optional(),
		subActivityId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		invitationStatus: z.lazy(() => StructorInvitationStatusSchema).optional()
	})
	.strict();

export const UserInstructorUncheckedCreateWithoutUserInputObjectSchema = Schema;
