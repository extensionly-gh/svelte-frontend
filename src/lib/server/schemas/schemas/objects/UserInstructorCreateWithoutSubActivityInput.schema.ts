import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';
import { UserCreateNestedOneWithoutUserInstructorInputObjectSchema } from './UserCreateNestedOneWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateWithoutSubActivityInput> = z
	.object({
		id: z.string().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		invitationStatus: z.lazy(() => StructorInvitationStatusSchema).optional(),
		User: z.lazy(() => UserCreateNestedOneWithoutUserInstructorInputObjectSchema)
	})
	.strict();

export const UserInstructorCreateWithoutSubActivityInputObjectSchema = Schema;
