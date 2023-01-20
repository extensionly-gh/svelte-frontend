import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutSubActivityInputObjectSchema } from './ActivityCreateWithoutSubActivityInput.schema';
import { ActivityUncheckedCreateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedCreateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutSubActivityInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutSubActivityInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const ActivityCreateOrConnectWithoutSubActivityInputObjectSchema = Schema;
