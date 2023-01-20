import { z } from 'zod';
import { ProjectCreateWithoutActivityInputObjectSchema } from './ProjectCreateWithoutActivityInput.schema';
import { ProjectUncheckedCreateWithoutActivityInputObjectSchema } from './ProjectUncheckedCreateWithoutActivityInput.schema';
import { ProjectCreateOrConnectWithoutActivityInputObjectSchema } from './ProjectCreateOrConnectWithoutActivityInput.schema';
import { ProjectUpsertWithoutActivityInputObjectSchema } from './ProjectUpsertWithoutActivityInput.schema';
import { ProjectWhereUniqueInputObjectSchema } from './ProjectWhereUniqueInput.schema';
import { ProjectUpdateWithoutActivityInputObjectSchema } from './ProjectUpdateWithoutActivityInput.schema';
import { ProjectUncheckedUpdateWithoutActivityInputObjectSchema } from './ProjectUncheckedUpdateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutActivityNestedInput> = z
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
		upsert: z.lazy(() => ProjectUpsertWithoutActivityInputObjectSchema).optional(),
		connect: z.lazy(() => ProjectWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => ProjectUpdateWithoutActivityInputObjectSchema),
				z.lazy(() => ProjectUncheckedUpdateWithoutActivityInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ProjectUpdateOneRequiredWithoutActivityNestedInputObjectSchema = Schema;
