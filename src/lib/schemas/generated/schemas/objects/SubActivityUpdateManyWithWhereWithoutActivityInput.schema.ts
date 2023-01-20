import { z } from 'zod';
import { SubActivityScalarWhereInputObjectSchema } from './SubActivityScalarWhereInput.schema';
import { SubActivityUpdateManyMutationInputObjectSchema } from './SubActivityUpdateManyMutationInput.schema';
import { SubActivityUncheckedUpdateManyWithoutSubActivityInputObjectSchema } from './SubActivityUncheckedUpdateManyWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpdateManyWithWhereWithoutActivityInput> = z
	.object({
		where: z.lazy(() => SubActivityScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => SubActivityUpdateManyMutationInputObjectSchema),
			z.lazy(() => SubActivityUncheckedUpdateManyWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const SubActivityUpdateManyWithWhereWithoutActivityInputObjectSchema = Schema;
