import { z } from 'zod';
import { SubActivityCreateWithoutUserInstructorInputObjectSchema } from './SubActivityCreateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedCreateWithoutUserInstructorInput.schema';
import { SubActivityCreateOrConnectWithoutUserInstructorInputObjectSchema } from './SubActivityCreateOrConnectWithoutUserInstructorInput.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityCreateNestedOneWithoutUserInstructorInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => SubActivityCreateWithoutUserInstructorInputObjectSchema),
				z.lazy(() => SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z
			.lazy(() => SubActivityCreateOrConnectWithoutUserInstructorInputObjectSchema)
			.optional(),
		connect: z.lazy(() => SubActivityWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const SubActivityCreateNestedOneWithoutUserInstructorInputObjectSchema = Schema;
