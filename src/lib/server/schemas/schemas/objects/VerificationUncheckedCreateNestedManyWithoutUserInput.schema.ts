import { z } from 'zod';
import { VerificationCreateWithoutUserInputObjectSchema } from './VerificationCreateWithoutUserInput.schema';
import { VerificationUncheckedCreateWithoutUserInputObjectSchema } from './VerificationUncheckedCreateWithoutUserInput.schema';
import { VerificationCreateOrConnectWithoutUserInputObjectSchema } from './VerificationCreateOrConnectWithoutUserInput.schema';
import { VerificationCreateManyUserInputEnvelopeObjectSchema } from './VerificationCreateManyUserInputEnvelope.schema';
import { VerificationWhereUniqueInputObjectSchema } from './VerificationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUncheckedCreateNestedManyWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => VerificationCreateWithoutUserInputObjectSchema),
				z.lazy(() => VerificationCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => VerificationCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => VerificationCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => VerificationCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => VerificationWhereUniqueInputObjectSchema),
				z.lazy(() => VerificationWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const VerificationUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
