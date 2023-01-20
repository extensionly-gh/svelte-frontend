import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';
import { EnumStructorInvitationStatusFieldUpdateOperationsInputObjectSchema } from './EnumStructorInvitationStatusFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutUserInstructorNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutUserInstructorNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateWithoutSubActivityInput> = z
	.object({
		id: z
			.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		createdAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		updatedAt: z
			.union([z.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
			.optional(),
		invitationStatus: z
			.union([
				z.lazy(() => StructorInvitationStatusSchema),
				z.lazy(() => EnumStructorInvitationStatusFieldUpdateOperationsInputObjectSchema)
			])
			.optional(),
		User: z.lazy(() => UserUpdateOneRequiredWithoutUserInstructorNestedInputObjectSchema).optional()
	})
	.strict();

export const UserInstructorUpdateWithoutSubActivityInputObjectSchema = Schema;
