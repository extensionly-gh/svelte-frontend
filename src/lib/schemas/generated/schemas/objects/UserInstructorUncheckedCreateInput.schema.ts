import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUncheckedCreateInput> = z
	.object({
		id: z.string().optional(),
		userId: z.string(),
		subActivityId: z.string(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		invitationStatus: z.lazy(() => StructorInvitationStatusSchema).optional()
	})
	.strict();

export const UserInstructorUncheckedCreateInputObjectSchema = Schema;
