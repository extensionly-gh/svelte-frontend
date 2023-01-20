import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { EnumEventVisibilityFilterObjectSchema } from './EnumEventVisibilityFilter.schema';
import { EventVisibilitySchema } from '../enums/EventVisibility.schema';
import { ProjectListRelationFilterObjectSchema } from './ProjectListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramWhereInput> = z
	.object({
		AND: z
			.union([
				z.lazy(() => ProgramWhereInputObjectSchema),
				z.lazy(() => ProgramWhereInputObjectSchema).array()
			])
			.optional(),
		OR: z
			.lazy(() => ProgramWhereInputObjectSchema)
			.array()
			.optional(),
		NOT: z
			.union([
				z.lazy(() => ProgramWhereInputObjectSchema),
				z.lazy(() => ProgramWhereInputObjectSchema).array()
			])
			.optional(),
		id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		faculty: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
		createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.date()]).optional(),
		visibility: z
			.union([
				z.lazy(() => EnumEventVisibilityFilterObjectSchema),
				z.lazy(() => EventVisibilitySchema)
			])
			.optional(),
		Project: z.lazy(() => ProjectListRelationFilterObjectSchema).optional()
	})
	.strict();

export const ProgramWhereInputObjectSchema = Schema;
