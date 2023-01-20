import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumVerificationTypeFilterObjectSchema } from './EnumVerificationTypeFilter.schema';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationScalarWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VerificationScalarWhereInputObjectSchema),
				z.lazy(() => VerificationScalarWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VerificationScalarWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VerificationScalarWhereInputObjectSchema),
				z.lazy(() => VerificationScalarWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
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

export const VerificationScalarWhereInputObjectSchema = Schema;
