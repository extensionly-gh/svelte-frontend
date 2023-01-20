import { z } from 'zod';
import { ActivityUpdateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUpdateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedUpdateWithoutUserEnrollmentsInput.schema';
import { ActivityCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedCreateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpsertWithoutUserEnrollmentsInput> = z
	.object({
		update: z.union([
			z.lazy(() => ActivityUpdateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutUserEnrollmentsInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpsertWithoutUserEnrollmentsInputObjectSchema = Schema;
