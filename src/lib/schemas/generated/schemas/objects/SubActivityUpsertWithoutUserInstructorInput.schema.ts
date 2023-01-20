import { z } from 'zod';
import { SubActivityUpdateWithoutUserInstructorInputObjectSchema } from './SubActivityUpdateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedUpdateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedUpdateWithoutUserInstructorInput.schema';
import { SubActivityCreateWithoutUserInstructorInputObjectSchema } from './SubActivityCreateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedCreateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpsertWithoutUserInstructorInput> = z
	.object({
		update: z.union([
			z.lazy(() => SubActivityUpdateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => SubActivityUncheckedUpdateWithoutUserInstructorInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => SubActivityCreateWithoutUserInstructorInputObjectSchema),
			z.lazy(() => SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema)
		])
	})
	.strict();

export const SubActivityUpsertWithoutUserInstructorInputObjectSchema = Schema;
