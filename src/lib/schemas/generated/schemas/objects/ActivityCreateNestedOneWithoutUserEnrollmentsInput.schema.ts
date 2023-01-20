import { z } from 'zod';
import { ActivityCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateWithoutUserEnrollmentsInput.schema';
import { ActivityUncheckedCreateWithoutUserEnrollmentsInputObjectSchema } from './ActivityUncheckedCreateWithoutUserEnrollmentsInput.schema';
import { ActivityCreateOrConnectWithoutUserEnrollmentsInputObjectSchema } from './ActivityCreateOrConnectWithoutUserEnrollmentsInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityCreateNestedOneWithoutUserEnrollmentsInput> = z
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
		connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const ActivityCreateNestedOneWithoutUserEnrollmentsInputObjectSchema = Schema;
