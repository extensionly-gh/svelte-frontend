import { z } from 'zod';
import { UserInstructorWhereUniqueInputObjectSchema } from './UserInstructorWhereUniqueInput.schema';
import { UserInstructorUpdateWithoutSubActivityInputObjectSchema } from './UserInstructorUpdateWithoutSubActivityInput.schema';
import { UserInstructorUncheckedUpdateWithoutSubActivityInputObjectSchema } from './UserInstructorUncheckedUpdateWithoutSubActivityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateWithWhereUniqueWithoutSubActivityInput> = z
	.object({
		where: z.lazy(() => UserInstructorWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => UserInstructorUpdateWithoutSubActivityInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedUpdateWithoutSubActivityInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorUpdateWithWhereUniqueWithoutSubActivityInputObjectSchema = Schema;
