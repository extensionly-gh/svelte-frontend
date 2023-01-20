import { z } from 'zod';
import { ActivityCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedCreateWithoutUserEnrollmentsInput.schema';
import { ActivityCreateOrConnectWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateOrConnectWithoutUserEnrollmentsInput.schema';
import { ActivityUpsertWithoutUserEnrollmentsInputObjectSchema } from './ActivityUpsertWithoutUserEnrollmentsInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUpdateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedUpdateWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateOneRequiredWithoutUserEnrollmentsNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ActivityCreateWithoutUserEnrollmentsInputObjectSchema),
				z.lazy(() => ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => ActivityCreateOrConnectWithoutUserEnrollmentsInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => ActivityUpsertWithoutUserEnrollmentsInputObjectSchema).optional(),
		connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => ActivityUpdateWithoutUserEnrollmentsInputObjectSchema),
				z.lazy(() => ActivityUncheckedUpdateWithoutUserEnrollmentsInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ActivityUpdateOneRequiredWithoutUserEnrollmentsNestedInputObjectSchema = Schema;
