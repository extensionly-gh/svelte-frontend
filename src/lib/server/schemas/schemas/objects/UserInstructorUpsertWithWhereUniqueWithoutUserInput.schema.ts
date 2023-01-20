import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithoutUserInputObjectSchema } from './UserInstructorUpdateWithoutUserInput.schema';
import { UserInstructorUncheckedUpdateWithoutUserInputObjectSchema } from './UserInstructorUncheckedUpdateWithoutUserInput.schema';
import { UserInstructorCreateWithoutUserInputObjectSchema } from './UserInstructorCreateWithoutUserInput.schema';
import { UserInstructorUncheckedCreateWithoutUserInputObjectSchema } from './UserInstructorUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => UserInstructorUpdateWithoutUserInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedUpdateWithoutUserInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => UserInstructorCreateWithoutUserInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
