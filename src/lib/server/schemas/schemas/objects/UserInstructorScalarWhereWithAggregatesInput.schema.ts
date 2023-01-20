import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumStructorInvitationStatusWithAggregatesFilterObjectSchema } from './EnumStructorInvitationStatusWithAggregatesFilter.schema';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => UserInstructorScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => UserInstructorScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => UserInstructorScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => UserInstructorScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => UserInstructorScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		subActivityId: z
			.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		invitationStatus: z
			.union([
				z.lazy(() => EnumStructorInvitationStatusWithAggregatesFilterObjectSchema),
				z.lazy(() => StructorInvitationStatusSchema)
			])
			.optional()
	})
	.strict();

export const UserInstructorScalarWhereWithAggregatesInputObjectSchema = Schema;
