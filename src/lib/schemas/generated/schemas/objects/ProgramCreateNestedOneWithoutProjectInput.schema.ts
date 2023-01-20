import { z } from 'zod';
import { ProgramCreateWithoutProjectInputObjectSchema } from './ProgramCreateWithoutProjectInput.schema';
import { ProgramUncheckedCreateWithoutProjectInputObjectSchema } from './ProgramUncheckedCreateWithoutProjectInput.schema';
import { ProgramCreateOrConnectWithoutProjectInputObjectSchema } from './ProgramCreateOrConnectWithoutProjectInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateNestedOneWithoutProjectInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ProgramCreateWithoutProjectInputObjectSchema),
				z.lazy(() => ProgramUncheckedCreateWithoutProjectInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutProjectInputObjectSchema).optional(),
		connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional()
	})
	.strict();

export const ProgramCreateNestedOneWithoutProjectInputObjectSchema = Schema;
