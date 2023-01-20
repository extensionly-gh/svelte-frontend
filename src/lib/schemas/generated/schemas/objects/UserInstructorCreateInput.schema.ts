import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';
import { UserCreateNestedOneWithoutUserInstructorInputObjectSchema } from './UserCreateNestedOneWithoutUserInstructorInput.schema';
import { SubActivityCreateNestedOneWithoutUserInstructorInputObjectSchema } from './SubActivityCreateNestedOneWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateInput> = z
	.object({
		id: z.string().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		invitationStatus: z.lazy(() => StructorInvitationStatusSchema).optional(),
		User: z.lazy(() => UserCreateNestedOneWithoutUserInstructorInputObjectSchema),
		SubActivity: z.lazy(() => SubActivityCreateNestedOneWithoutUserInstructorInputObjectSchema)
	})
	.strict();

export const UserInstructorCreateInputObjectSchema = Schema;
