import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { EnumRoleFilterObjectSchema } from './EnumRoleFilter.schema';
import { RoleSchema } from '../enums/Role.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { VerificationListRelationFilterObjectSchema } from './VerificationListRelationFilter.schema';
import { UserEnrollmentsListRelationFilterObjectSchema } from './UserEnrollmentsListRelationFilter.schema';
import { ActivityListRelationFilterObjectSchema } from './ActivityListRelationFilter.schema';
import { UserInstructorListRelationFilterObjectSchema } from './UserInstructorListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserWhereInputObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserWhereInputObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		password: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		phone: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		image: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		isPreRegistration: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		role: z.union([z.lazy(() => EnumRoleFilterObjectSchema), z.lazy(() => RoleSchema)]).optional(),
		isTermsAccepted: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		Verification: z.lazy(() => VerificationListRelationFilterObjectSchema).optional(),
		UserEnrollments: z.lazy(() => UserEnrollmentsListRelationFilterObjectSchema).optional(),
		Activity: z.lazy(() => ActivityListRelationFilterObjectSchema).optional(),
		UserInstructor: z.lazy(() => UserInstructorListRelationFilterObjectSchema).optional()
	})
	.strict();

export const UserWhereInputObjectSchema = Schema;
