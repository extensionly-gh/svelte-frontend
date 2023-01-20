import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutProjectInputObjectSchema } from './ActivityCreateWithoutProjectInput.schema';
import { ActivityUncheckedCreateWithoutProjectInputObjectSchema } from './ActivityUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutProjectInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutProjectInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ActivityCreateOrConnectWithoutProjectInputObjectSchema = Schema;
