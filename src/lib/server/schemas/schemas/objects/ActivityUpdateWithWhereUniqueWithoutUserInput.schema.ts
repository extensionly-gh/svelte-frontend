import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutUserInputObjectSchema } from './ActivityUpdateWithoutUserInput.schema';
import { ActivityUncheckedUpdateWithoutUserInputObjectSchema } from './ActivityUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => ActivityUpdateWithoutUserInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
