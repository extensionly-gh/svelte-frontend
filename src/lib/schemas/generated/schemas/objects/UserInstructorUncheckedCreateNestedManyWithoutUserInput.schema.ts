import { z } from 'zod';
import { UserInstructorCreateWithoutUserInputObjectSchema } from './UserInstructorCreateWithoutUserInput.schema';
import { UserInstructorUncheckedCreateWithoutUserInputObjectSchema } from './UserInstructorUncheckedCreateWithoutUserInput.schema';
import { UserInstructorCreateOrConnectWithoutUserInputObjectSchema } from './UserInstructorCreateOrConnectWithoutUserInput.schema';
import { UserInstructorCreateManyUserInputEnvelopeObjectSchema } from './UserInstructorCreateManyUserInputEnvelope.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUncheckedCreateNestedManyWithoutUserInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserInstructorCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorCreateWithoutUserInputObjectSchema).array(),
				z.lazy(() => UserInstructorUncheckedCreateWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorUncheckedCreateWithoutUserInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserInstructorCreateOrConnectWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorCreateOrConnectWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserInstructorCreateManyUserInputEnvelopeObjectSchema).optional(),
		connect: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserInstructorUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
