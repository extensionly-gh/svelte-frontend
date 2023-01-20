import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithoutUserInputObjectSchema } from './UserEnrollmentsUpdateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedUpdateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => UserEnrollmentsUpdateWithoutUserInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedUpdateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
