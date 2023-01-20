import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithoutSubActivityInputObjectSchema } from './UserInstructorUpdateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedUpdateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedUpdateWithoutSubActivityInput.schema';
import { UserInstructorCreateWithoutSubActivityInputObjectSchema } from './UserInstructorCreateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedCreateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpsertWithWhereUniqueWithoutSubActivityInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => UserInstructorUpdateWithoutSubActivityInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedUpdateWithoutSubActivityInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserInstructorCreateWithoutSubActivityInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorUpsertWithWhereUniqueWithoutSubActivityInputObjectSchema = Schema;
