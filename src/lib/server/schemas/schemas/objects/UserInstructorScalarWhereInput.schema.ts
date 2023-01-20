import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumStructorInvitationStatusFilterObjectSchema } from './EnumStructorInvitationStatusFilter.schema';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema),
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserInstructorScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema),
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		subActivityId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		invitationStatus: z
			.union([
				z.lazy(() => EnumStructorInvitationStatusFilterObjectSchema),
				z.lazy(() => StructorInvitationStatusSchema)
			])
			.optional()
	})
	.strict();

export const UserInstructorScalarWhereInputObjectSchema = Schema;
