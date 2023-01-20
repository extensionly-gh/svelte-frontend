import { z } from 'zod';
import { UserInstructorScalarWhereInputObjectSchema } from './UserInstructorScalarWhereInput.schema';
import { UserInstructorUpdateManyMutationInputObjectSchema } from './UserInstructorUpdateManyMutationInput.schema';
import { UserInstructorUncheckedUpdateManyWithoutUserInstructorInputObjectSchema } from './UserInstructorUncheckedUpdateManyWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserInstructorUpdateManyWithWhereWithoutUserInput> = z
	.object({
		where: z.lazy(() => UserInstructorScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => UserInstructorUpdateManyMutationInputObjectSchema),
			z.lazy(() => UserInstructorUncheckedUpdateManyWithoutUserInstructorInputObjectSchema)
		])
	})
	.strict();

export const UserInstructorUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
