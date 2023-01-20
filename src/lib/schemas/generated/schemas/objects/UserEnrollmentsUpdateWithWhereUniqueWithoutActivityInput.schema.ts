import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithoutActivityInputObjectSchema } from './UserEnrollmentsUpdateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedUpdateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedUpdateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => UserEnrollmentsUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedUpdateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsUpdateWithWhereUniqueWithoutActivityInputObjectSchema = Schema;
