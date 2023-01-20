import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutProjectInputObjectSchema } from './ActivityUpdateWithoutProjectInput.schema';
import { ActivityUncheckedUpdateWithoutProjectInputObjectSchema } from './ActivityUncheckedUpdateWithoutProjectInput.schema';
import { ActivityCreateWithoutProjectInputObjectSchema } from './ActivityCreateWithoutProjectInput.schema';
import { ActivityUncheckedCreateWithoutProjectInputObjectSchema } from './ActivityUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutProjectInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => ActivityUpdateWithoutProjectInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutProjectInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutProjectInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpsertWithWhereUniqueWithoutProjectInputObjectSchema = Schema;
