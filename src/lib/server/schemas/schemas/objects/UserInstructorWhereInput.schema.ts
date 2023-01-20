import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumStructorInvitationStatusFilterObjectSchema } from './EnumStructorInvitationStatusFilter.schema';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SubActivityRelationFilterObjectSchema } from './SubActivityRelationFilter.schema';
import { SubActivityWhereInputObjectSchema } from './SubActivityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserInstructorWhereInputObjectSchema),
				z.lazy(() => UserInstructorWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserInstructorWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserInstructorWhereInputObjectSchema),
				z.lazy(() => UserInstructorWhereInputObjectSchema).array()
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
			.optional(),
		User: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema)
			])
			.optional(),
		SubActivity: z
			.union([
				z.lazy(() => SubActivityRelationFilterObjectSchema),
				z.lazy(() => SubActivityWhereInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const UserInstructorWhereInputObjectSchema = Schema;
