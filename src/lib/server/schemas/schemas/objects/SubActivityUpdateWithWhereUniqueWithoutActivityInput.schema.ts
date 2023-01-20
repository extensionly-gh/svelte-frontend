import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityUpdateWithoutActivityInputObjectSchema } from './SubActivityUpdateWithoutActivityInput.schema';
import { SubActivityUncheckedUpdateWithoutActivityInputObjectSchema } from './SubActivityUncheckedUpdateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpdateWithWhereUniqueWithoutActivityInput> = z
	.object({
		where: z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => SubActivityUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => SubActivityUncheckedUpdateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const SubActivityUpdateWithWhereUniqueWithoutActivityInputObjectSchema = Schema;
