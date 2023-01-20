import { z } from 'zod';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';
import { UserEnrollmentsUpdateWithoutActivityInputObjectSchema } from './UserEnrollmentsUpdateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedUpdateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedUpdateWithoutActivityInput.schema';
import { UserEnrollmentsCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInput> = z
	.object({
		where: z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => UserEnrollmentsUpdateWithoutActivityInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedUpdateWithoutActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema),
			z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema)
		])
	})
	.strict();

export const UserEnrollmentsUpsertWithWhereUniqueWithoutActivityInputObjectSchema = Schema;
