import { z } from 'zod';
import { ProjectCreateWithoutActivityInputObjectSchema } from './ProjectCreateWithoutActivityInput.schema';
import { ProjectUncheckedCreateWithoutActivityInputObjectSchema } from './ProjectUncheckedCreateWithoutActivityInput.schema';
import { ProjectCreateOrConnectWithoutActivityInputObjectSchema } from './ProjectCreateOrConnectWithoutActivityInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutActivityInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ProjectCreateWithoutActivityInputObjectSchema),
				z.lazy(() => ProjectUncheckedCreateWithoutActivityInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => ProjectCreateOrConnectWithoutActivityInputObjectSchema)
			.optional(),
		connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const ProjectCreateNestedOneWithoutActivityInputObjectSchema = Schema;
