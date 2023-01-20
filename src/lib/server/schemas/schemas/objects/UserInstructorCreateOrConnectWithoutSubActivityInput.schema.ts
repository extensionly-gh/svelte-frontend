import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorCreateWithoutSubActivityInputObjectSchema } from './UserInstructorCreateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedCreateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateOrConnectWithoutSubActivityInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserInstructorCreateWithoutSubActivityInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedCreateWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorCreateOrConnectWithoutSubActivityInputObjectSchema = Schema;
