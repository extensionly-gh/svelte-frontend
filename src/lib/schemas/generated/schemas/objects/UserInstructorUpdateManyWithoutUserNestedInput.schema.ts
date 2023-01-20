import { z } from 'zod';
import { UserInstructorCreateWithoutUserInputObjectSchema } from './UserInstructorCreateWithoutUserInput.schema';
import { UserInstructorUncheckedCreateWithoutUserInputObjectSchema } from './UserInstructorUncheckedCreateWithoutUserInput.schema';
import { UserInstructorCreateOrConnectWithoutUserInputObjectSchema } from './UserInstructorCreateOrConnectWithoutUserInput.schema';
import { UserInstructorUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserInstructorUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserInstructorCreateManyUserInputEnvelopeObjectSchema } from './UserInstructorCreateManyUserInputEnvelope.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserInstructorUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserInstructorUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserInstructorUpdateManyWithWhereWithoutUserInput.schema';
import { UserInstructorScalarWhereInputObjectSchema } from './UserInstructorScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateManyWithoutUserNestedInput> = z
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
		upsert: z
			.union([
				z.lazy(() => UserInstructorUpsertWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		createMany: z.lazy(() => UserInstructorCreateManyUserInputEnvelopeObjectSchema).optional(),
		set: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		disconnect: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		delete: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		connect: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional(),
		update: z
			.union([
				z.lazy(() => UserInstructorUpdateWithWhereUniqueWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => UserInstructorUpdateManyWithWhereWithoutUserInputObjectSchema),
				z.lazy(() => UserInstructorUpdateManyWithWhereWithoutUserInputObjectSchema).array()
			])
			.optional(),
		deleteMany: z
			.union([
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema),
				z.lazy(() => UserInstructorScalarWhereInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserInstructorUpdateManyWithoutUserNestedInputObjectSchema = Schema;
