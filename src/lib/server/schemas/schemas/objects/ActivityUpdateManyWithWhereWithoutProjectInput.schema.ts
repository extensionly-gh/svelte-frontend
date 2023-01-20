import { z } from 'zod';
import { ActivityScalarWhereInputObjectSchema } from './ActivityScalarWhereInput.schema';
import { ActivityUpdateManyMutationInputObjectSchema } from './ActivityUpdateManyMutationInput.schema';
import { ActivityUncheckedUpdateManyWithoutActivityInputObjectSchema } from './ActivityUncheckedUpdateManyWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ActivityUpdateManyWithWhereWithoutProjectInput> = z
	.object({
		where: z.lazy(() => ActivityScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => ActivityUpdateManyMutationInputObjectSchema),
			z.lazy(() => ActivityUncheckedUpdateManyWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const ActivityUpdateManyWithWhereWithoutProjectInputObjectSchema = Schema;
