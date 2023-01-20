import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateOrConnectWithoutActivityInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema = Schema;
