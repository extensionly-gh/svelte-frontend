import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { UserEnrollmentsUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedCreateNestedManyWithoutUserInput.schema';
import { ActivityUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ActivityUncheckedCreateNestedManyWithoutUserInput.schema';
import { UserInstructorUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './UserInstructorUncheckedCreateNestedManyWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutVerificationInput> = z
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
		UserEnrollments: z
			.lazy(() => UserEnrollmentsUncheckedCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		Activity: z
			.lazy(() => ActivityUncheckedCreateNestedManyWithoutUserInputObjectSchema)
			.optional(),
		UserInstructor: z
			.lazy(() => UserInstructorUncheckedCreateNestedManyWithoutUserInputObjectSchema)
			.optional()
	})
	.strict();

export const UserUncheckedCreateWithoutVerificationInputObjectSchema = Schema;