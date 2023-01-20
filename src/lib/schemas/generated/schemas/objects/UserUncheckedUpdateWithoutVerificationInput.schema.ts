import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { RoleSchema } from '../enums/Role.schema';
import { EnumRoleFieldUpdateOperationsInputObjectSchema } from './EnumRoleFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserEnrollmentsUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserEnrollmentsUncheckedUpdateManyWithoutUserNestedInput.schema';
import { ActivityUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutUserNestedInput.schema';
import { UserInstructorUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './UserInstructorUncheckedUpdateManyWithoutUserNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutVerificationInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		name: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		email: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		password: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		phone: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		image: z
			.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
			.optional()
			.nullable(),
		isPreRegistration: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		role: z
			.union([
				z.lazy(() => RoleSchema),
				z.lazy(() => EnumRoleFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		isTermsAccepted: z
			.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		UserEnrollments: z
			.lazy(() => UserEnrollmentsUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
			.optional(),
		Activity: z
			.lazy(() => ActivityUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
			.optional(),
		UserInstructor: z
			.lazy(() => UserInstructorUncheckedUpdateManyWithoutUserNestedInputObjectSchema)
			.optional()
	})
	.strict();

export const UserUncheckedUpdateWithoutVerificationInputObjectSchema = Schema;
