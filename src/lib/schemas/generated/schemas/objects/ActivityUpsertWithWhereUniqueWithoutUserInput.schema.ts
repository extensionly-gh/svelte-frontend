import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutUserInputObjectSchema } from './ActivityUpdateWithoutUserInput.schema';
import { ActivityUncheckedUpdateWithoutUserInputObjectSchema } from './ActivityUncheckedUpdateWithoutUserInput.schema';
import { ActivityCreateWithoutUserInputObjectSchema } from './ActivityCreateWithoutUserInput.schema';
import { ActivityUncheckedCreateWithoutUserInputObjectSchema } from './ActivityUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => ActivityUpdateWithoutUserInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutUserInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutUserInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
