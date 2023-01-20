import { z } from 'zod';
import { ActivityCreateWithoutSubActivityInputObjectSchema } from './ActivityCreateWithoutSubActivityInput.schema';
import { ActivityUncheckedCreateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedCreateWithoutSubActivityInput.schema';
import { ActivityCreateOrConnectWithoutSubActivityInputObjectSchema } from './ActivityCreateOrConnectWithoutSubActivityInput.schema';
import { ActivityUpsertWithoutSubActivityInputObjectSchema } from './ActivityUpsertWithoutSubActivityInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './ActivityWhereUniqueInput.schema';
import { ActivityUpdateWithoutSubActivityInputObjectSchema } from './ActivityUpdateWithoutSubActivityInput.schema';
import { ActivityUncheckedUpdateWithoutSubActivityInputObjectSchema } from './ActivityUncheckedUpdateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateOneRequiredWithoutSubActivityNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ActivityCreateWithoutSubActivityInputObjectSchema),
				z.lazy(() => ActivityUncheckedCreateWithoutSubActivityInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => ActivityCreateOrConnectWithoutSubActivityInputObjectSchema)
			.optional(),
		upsert: z.lazy(() => ActivityUpsertWithoutSubActivityInputObjectSchema).optional(),
		connect: z.lazy(() => ActivityWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => ActivityUpdateWithoutSubActivityInputObjectSchema),
				z.lazy(() => ActivityUncheckedUpdateWithoutSubActivityInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ActivityUpdateOneRequiredWithoutSubActivityNestedInputObjectSchema = Schema;
