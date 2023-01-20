import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEventVisibilityFilterObjectSchema } from './EnumEventVisibilityFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ActivityListRelationFilterObjectSchema } from './ActivityListRelationFilter.schema';
import { ProgramRelationFilterObjectSchema } from './ProgramRelationFilter.schema';
import { ProgramWhereInputObjectSchema } from './ProgramWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ProjectWhereInputObjectSchema),
				z.lazy(() => ProjectWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ProjectWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ProjectWhereInputObjectSchema),
				z.lazy(() => ProjectWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		programId: z
			.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
			.optional()
			.nullable(),
		faculty: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		acceptStudentsProposals: z
			.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
			.optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		Activity: z.lazy(() => ActivityListRelationFilterObjectSchema).optional(),
		Program: z
			.union([
				z.lazy(() => ProgramRelationFilterObjectSchema),
				z.lazy(() => ProgramWhereInputObjectSchema)
			])
			.optional()
			.nullable()
	})
	.strict();

export const ProjectWhereInputObjectSchema = Schema;
