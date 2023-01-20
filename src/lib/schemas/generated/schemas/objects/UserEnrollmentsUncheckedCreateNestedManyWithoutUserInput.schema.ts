import { z } from 'zod';
import { UserEnrollmentsCreateWithoutUserInputObjectSchema } from './UserEnrollmentsCreateWithoutUserInput.schema';
import { UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema } from './UserEnrollmentsUncheckedCreateWithoutUserInput.schema';
import { UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema } from './UserEnrollmentsCreateOrConnectWithoutUserInput.schema';
import { UserEnrollmentsCreateManyUserInputEnvelopeObjectSchema } from './UserEnrollmentsCreateManyUserInputEnvelope.schema';
import { UserEnrollmentsWhereUniqueInputObjectSchema } from './UserEnrollmentsWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserEnrollmentsUncheckedCreateNestedManyWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => UserEnrollmentsCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserEnrollmentsCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema),
				z.lazy(() => UserEnrollmentsWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserEnrollmentsUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
