import { z } from 'zod';
import { UserInstructorCreateWithoutSubActivityInputObjectSchema } from './UserInstructorCreateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedCreateWithoutSubActivityInput.schema';
import { UserInstructorCreateOrConnectWithoutSubActivityInputObjectSchema } from './UserInstructorCreateOrConnectWithoutSubActivityInput.schema';
import { UserInstructorCreateManySubActivityInputEnvelopeObjectSchema } from './UserInstructorCreateManySubActivityInputEnvelope.schema';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUncheckedCreateNestedManyWithoutSubActivityInput> = z
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
		createMany: z
			.lazy(() => UserInstructorCreateManySubActivityInputEnvelopeObjectSchema)
			.optional(),
		connect: z
			.union([
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
				z.lazy(() => UserInstructorWhereUniqueInputObjectSchema).array()
			])
			.optional()
	})
	.strict();

export const UserInstructorUncheckedCreateNestedManyWithoutSubActivityInputObjectSchema = Schema;
