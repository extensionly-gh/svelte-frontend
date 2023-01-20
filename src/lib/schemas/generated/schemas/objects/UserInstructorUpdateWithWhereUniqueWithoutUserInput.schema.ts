import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithoutUserInputObjectSchema } from './UserInstructorUpdateWithoutUserInput.schema';
import { UserInstructorUncheckedUpdateWithoutUserInputObjectSchema } from './UserInstructorUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => UserInstructorUpdateWithoutUserInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedUpdateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
