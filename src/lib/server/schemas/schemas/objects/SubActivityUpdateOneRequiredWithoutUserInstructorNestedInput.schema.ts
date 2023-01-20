import { z } from 'zod';
import { SubActivityCreateWithoutUserInstructorInputObjectSchema } from './SubActivityCreateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedCreateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedCreateWithoutUserInstructorInput.schema';
import { SubActivityCreateOrConnectWithoutUserInstructorInputObjectSchema } from './SubActivityCreateOrConnectWithoutUserInstructorInput.schema';
import { SubActivityUpsertWithoutUserInstructorInputObjectSchema } from './SubActivityUpsertWithoutUserInstructorInput.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './SubActivityWhereUniqueInput.schema';
import { SubActivityUpdateWithoutUserInstructorInputObjectSchema } from './SubActivityUpdateWithoutUserInstructorInput.schema';
import { SubActivityUncheckedUpdateWithoutUserInstructorInputObjectSchema } from './SubActivityUncheckedUpdateWithoutUserInstructorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubActivityUpdateOneRequiredWithoutUserInstructorNestedInput> = z
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
		upsert: z.lazy(() => SubActivityUpsertWithoutUserInstructorInputObjectSchema).optional(),
		connect: z.lazy(() => SubActivityWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => SubActivityUpdateWithoutUserInstructorInputObjectSchema),
				z.lazy(() => SubActivityUncheckedUpdateWithoutUserInstructorInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const SubActivityUpdateOneRequiredWithoutUserInstructorNestedInputObjectSchema = Schema;
