import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { EnumEventVisibilityWithAggregatesFilterObjectSchema } from './EnumEventVisibilityWithAggregatesFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectScalarWhereWithAggregatesInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema),
				z.lazy(() => ProjectScalarWhereWithAggregatesInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		programId: z
			.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		faculty: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
		acceptStudentsProposals: z
			.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()])
			.optional(),
		createdAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		updatedAt: z
			.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.date()])
			.optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityWithAggregatesFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional()
	})
	.strict();

export const ProjectScalarWhereWithAggregatesInputObjectSchema = Schema;
