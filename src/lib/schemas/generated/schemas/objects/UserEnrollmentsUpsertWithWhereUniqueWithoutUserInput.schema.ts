import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithoutUserInputObjectSchema } from './UserEnrollmentsUpdateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedUpdateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedUpdateWithoutUserInput.schema';
import { UserEnrollmentsCreateWithoutUserInputObjectSchema } from './UserEnrollmentsCreateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => UserEnrollmentsUpdateWithoutUserInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedUpdateWithoutUserInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
