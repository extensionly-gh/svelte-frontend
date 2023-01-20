import { z } from 'zod';
import { UserInstructorCreateWithoutSubActivityInputObjectSchema } from './UserInstructorCreateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedCreateWithoutSubActivityInput.schema';
import { UserInstructorCreateOrConnectWithoutSubActivityInputObjectSchema } from './UserInstructorCreateOrConnectWithoutSubActivityInput.schema';
import { UserInstructorUpsertWithWhereUniqueWithoutSubActivityInputObjectSchema } from './UserInstructorUpsertWithWhereUniqueWithoutSubActivityInput.schema';
import { UserInstructorCreateManySubActivityInputEnvelopeObjectSchema } from './UserInstructorCreateManySubActivityInputEnvelope.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithWhereUniqueWithoutSubActivityInputObjectSchema } from './UserInstructorUpdateWithWhereUniqueWithoutSubActivityInput.schema';
import { UserInstructorUpdateManyWithWhereWithoutSubActivityInputObjectSchema } from './UserInstructorUpdateManyWithWhereWithoutSubActivityInput.schema';
import { UserInstructorScalarWhereInputObjectSchema } from './UserInstructorScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateManyWithoutSubActivityNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => UserInstructorCreateWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorCreateWithoutSubActivityInputObjectSchema).array(),
				z.lazy(() => UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema).array()
			])
			.optional(),
		connectOrCreate: z
			.union([
				z.lazy(() => UserInstructorCreateOrConnectWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorCreateOrConnectWithoutSubActivityInputObjectSchema).array()
			])
			.optional(),
		upsert: z
			.union([
				z.lazy(() => UserInstructorUpsertWithWhereUniqueWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorUpsertWithWhereUniqueWithoutSubActivityInputObjectSchema).array()
			])
			.optional(),
		createMany: z
			.lazy(() => UserInstructorCreateManySubActivityInputEnvelopeObjectSchema)
			.optional(),
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
				z.lazy(() => UserInstructorUpdateWithWhereUniqueWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorUpdateWithWhereUniqueWithoutSubActivityInputObjectSchema).array()
			])
			.optional(),
		updateMany: z
			.union([
				z.lazy(() => UserInstructorUpdateManyWithWhereWithoutSubActivityInputObjectSchema),
				z.lazy(() => UserInstructorUpdateManyWithWhereWithoutSubActivityInputObjectSchema).array()
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

export const UserInstructorUpdateManyWithoutSubActivityNestedInputObjectSchema = Schema;
