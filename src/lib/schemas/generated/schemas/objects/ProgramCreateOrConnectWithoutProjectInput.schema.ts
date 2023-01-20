import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramCreateWithoutProjectInputObjectSchema } from './ProgramCreateWithoutProjectInput.schema';
import { ProgramUncheckedCreateWithoutProjectInputObjectSchema } from './ProgramUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramCreateOrConnectWithoutProjectInput> = z
	.object({
		where: z.lazy(() => ProgramWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => ProgramCreateWithoutProjectInputObjectSchema),
			z.lazy(() => ProgramUncheckedCreateWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ProgramCreateOrConnectWithoutProjectInputObjectSchema = Schema;
