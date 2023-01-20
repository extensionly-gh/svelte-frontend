import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutProjectInputObjectSchema } from './ActivityUpdateWithoutProjectInput.schema';
import { ActivityUncheckedUpdateWithoutProjectInputObjectSchema } from './ActivityUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutProjectInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => ActivityUpdateWithoutProjectInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpdateWithWhereUniqueWithoutProjectInputObjectSchema = Schema;
