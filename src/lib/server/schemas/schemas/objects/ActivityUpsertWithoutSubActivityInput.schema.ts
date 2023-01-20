import { z } from 'zod';
import { ActivityUpdateWithoutSubActivityInputObjectSchema } from './ActivityUpdateWithoutSubActivityInput.schema';
import { ActivityUncheckedUpdateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedUpdateWithoutSubActivityInput.schema';
import { ActivityCreateWithoutSubActivityInputObjectSchema } from './ActivityCreateWithoutSubActivityInput.schema';
import { ActivityUncheckedCreateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedCreateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpsertWithoutSubActivityInput> = z
	.object({
		update: z.union([
			z.lazy(() => ActivityUpdateWithoutSubActivityInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateWithoutSubActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ActivityCreateWithoutSubActivityInputObjectSchema),
			z.lazy(() => ActivityUncheckedCreateWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpsertWithoutSubActivityInputObjectSchema = Schema;
