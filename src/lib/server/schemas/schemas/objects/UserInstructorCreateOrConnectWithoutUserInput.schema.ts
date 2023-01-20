import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorCreateWithoutUserInputObjectSchema } from './UserInstructorCreateWithoutUserInput.schema';
import { UserInstructorUncheckedCreateWithoutUserInputObjectSchema } from './UserInstructorUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => UserInstructorCreateWithoutUserInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorCreateOrConnectWithoutUserInputObjectSchema = Schema;
