import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityUpdateWithoutActivityInputObjectSchema } from './SubActivityUpdateWithoutActivityInput.schema';
import { SubActivityUncheckedUpdateWithoutActivityInputObjectSchema } from './SubActivityUncheckedUpdateWithoutActivityInput.schema';
import { SubActivityCreateWithoutActivityInputObjectSchema } from './SubActivityCreateWithoutActivityInput.schema';
import { SubActivityUncheckedCreateWithoutActivityInputObjectSchema } from './SubActivityUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpsertWithWhereUniqueWithoutActivityInput> = z
	.object({
		where: z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => SubActivityUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => SubActivityUncheckedUpdateWithoutActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => SubActivityCreateWithoutActivityInputObjectSchema),
			z.lazy(() => SubActivityUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const SubActivityUpsertWithWhereUniqueWithoutActivityInputObjectSchema = Schema;
