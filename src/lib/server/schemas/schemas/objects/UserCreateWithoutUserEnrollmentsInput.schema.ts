import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { VerificationCreateNestedManyWithoutUserInputObjectSchema } from './VerificationCreateNestedManyWithoutUserInput.schema';
import { ActivityCreateNestedManyWithoutUserInputObjectSchema } from './ActivityCreateNestedManyWithoutUserInput.schema';
import { UserInstructorCreateNestedManyWithoutUserInputObjectSchema } from './UserInstructorCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateWithoutUserEnrollmentsInput> = z
	.object({
		id: z.string().optional(),
		name: z.string(),
		email: z.string(),
		password: z.string().optional().nullable(),
		phone: z.string().optional().nullable(),
		image: z.string().optional().nullable(),
		isPreRegistration: z.boolean().optional(),
		role: z.lazy(() => RoleSchema).optional(),
		isTermsAccepted: z.boolean().optional(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional(),
		Verification: z.lazy(() => VerificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
		Activity: z.lazy(() => ActivityCreateNestedManyWithoutUserInputObjectSchema).optional(),
		UserInstructor: z
			.lazy(() => UserInstructorCreateNestedManyWithoutUserInputObjectSchema)
			.optional()
	})
	.strict();

export const UserCreateWithoutUserEnrollmentsInputObjectSchema = Schema;
