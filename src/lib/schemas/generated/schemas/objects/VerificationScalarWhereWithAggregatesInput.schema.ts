import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumVerificationTypeWithAggregatesFilterObjectSchema } from './EnumVerificationTypeWithAggregatesFilter.schema';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => VerificationScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		token: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		type: z
			.union([
				z.lazy(() => EnumVerificationTypeWithAggregatesFilterObjectSchema),
				z.lazy(() => VerificationTypeSchema)
			])
			.optional(),
		isVerified: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		liftCooldownAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional()
	})
	.strict();

export const VerificationScalarWhereWithAggregatesInputObjectSchema = Schema;
