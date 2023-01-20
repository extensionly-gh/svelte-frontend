import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityCreateWithoutUserInstructorInputObjectSchema } from './SubActivityCreateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedCreateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateOrConnectWithoutUserInstructorInput> = z
	.object({
		where: z.lazy(() => SubActivityWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => SubActivityCreateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema)
		])
	})
	.strict();

export const SubActivityCreateOrConnectWithoutUserInstructorInputObjectSchema = Schema;
