import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedCreateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateOrConnectWithoutUserEnrollmentsInput> = z
	.object({
		where: z.lazy(() => ActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
		])
	})
	.strict();

export const ActivityCreateOrConnectWithoutUserEnrollmentsInputObjectSchema = Schema;
