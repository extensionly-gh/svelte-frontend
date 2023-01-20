import { z } from 'zod';
import { UserEnrollmentsCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateWithoutActivityInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutActivityInput.schema';
import { UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema } from './UserEnrollmentsCreateOrConnectWithoutActivityInput.schema';
import { UserEnrollmentsCreateManyActivityInputEnvelopeObjectSchema } from './UserEnrollmentsCreateManyActivityInputEnvelope.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsCreateNestedManyWithoutActivityInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateWithoutActivityInputObjectSchema).array(),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutActivityInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserEnrollmentsCreateManyActivityInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsCreateNestedManyWithoutActivityInputObjectSchema = Schema;
