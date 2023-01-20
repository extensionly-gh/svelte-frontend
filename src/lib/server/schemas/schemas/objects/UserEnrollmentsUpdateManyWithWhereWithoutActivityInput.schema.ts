import { z } from 'zod';
import { UserEnrollmentsScalarWhereInputObjectSchema } from './UserEnrollmentsScalarWhereInput.schema';
import { UserEnrollmentsUpdateManyMutationInputObjectSchema } from './UserEnrollmentsUpdateManyMutationInput.schema';
import { UserEnrollmentsUncheckedUpdateManyWithoutUserEnrollmentsInputObjectSchema } from './UserEnrollmentsUncheckedUpdateManyWithoutUserEnrollmentsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpdateManyWithWhereWithoutActivityInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => UserEnrollmentsUpdateManyMutationInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedUpdateManyWithoutUserEnrollmentsInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsUpdateManyWithWhereWithoutActivityInputObjectSchema = Schema;
