import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVerificationTypeFilterObjectSchema } from './EnumVerificationTypeFilter.schema';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VerificationWhereInputObjectSchema),
				z.lazy(() => VerificationWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VerificationWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VerificationWhereInputObjectSchema),
				z.lazy(() => VerificationWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		user: z
			.union([
				z.lazy(() => UserRelationFilterObjectSchema),
				z.lazy(() => UserWhereInputObjectSchema)
			])
			.optional(),
		userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		token: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		type: z
			.union([
				z.lazy(() => EnumVerificationTypeFilterObjectSchema),
				z.lazy(() => VerificationTypeSchema)
			])
			.optional(),
		isVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
		liftCooldownAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional()
	})
	.strict();

export const VerificationWhereInputObjectSchema = Schema;
