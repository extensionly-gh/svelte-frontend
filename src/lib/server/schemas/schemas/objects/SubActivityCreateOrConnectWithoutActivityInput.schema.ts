import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityCreateWithoutActivityInputObjectSchema } from './SubActivityCreateWithoutActivityInput.schema';
import { SubActivityUncheckedCreateWithoutActivityInputObjectSchema } from './SubActivityUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateOrConnectWithoutActivityInput> = z
	.object({
		where: z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SubActivityCreateWithoutActivityInputObjectSchema),
			z.lazy(() => SubActivityUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const SubActivityCreateOrConnectWithoutActivityInputObjectSchema = Schema;
