import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutUserInputObjectSchema } from './ActivityCreateWithoutUserInput.schema';
import { ActivityUncheckedCreateWithoutUserInputObjectSchema } from './ActivityUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutUserInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const ActivityCreateOrConnectWithoutUserInputObjectSchema = Schema;
