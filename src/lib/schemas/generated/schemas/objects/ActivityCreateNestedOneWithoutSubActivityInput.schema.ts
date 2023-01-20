import { z } from 'zod';
import { ActivityCreateWithoutSubActivityInputObjectSchema } from './ActivityCreateWithoutSubActivityInput.schema';
import { ActivityUncheckedCreateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedCreateWithoutSubActivityInput.schema';
import { ActivityCreateOrConnectWithoutSubActivityInputObjectSchema } from './ActivityCreateOrConnectWithoutSubActivityInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateNestedOneWithoutSubActivityInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ActivityCreateWithoutSubActivityInputObjectSchema),
				z.lazy(() => ActivityUncheckedCreateWithoutSubActivityInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => ActivityCreateOrConnectWithoutSubActivityInputObjectSchema)
			.optional(),
		connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const ActivityCreateNestedOneWithoutSubActivityInputObjectSchema = Schema;
