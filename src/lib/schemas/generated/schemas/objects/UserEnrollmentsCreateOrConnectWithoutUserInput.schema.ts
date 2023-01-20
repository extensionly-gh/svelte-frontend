import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsCreateWithoutUserInputObjectSchema } from './UserEnrollmentsCreateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema = Schema;
