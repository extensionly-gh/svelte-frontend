import { z } from 'zod';
import { ProgramUpdateWithoutProjectInputObjectSchema } from './ProgramUpdateWithoutProjectInput.schema';
import { ProgramUncheckedUpdateWithoutProjectInputObjectSchema } from './ProgramUncheckedUpdateWithoutProjectInput.schema';
import { ProgramCreateWithoutProjectInputObjectSchema } from './ProgramCreateWithoutProjectInput.schema';
import { ProgramUncheckedCreateWithoutProjectInputObjectSchema } from './ProgramUncheckedCreateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpsertWithoutProjectInput> = z
	.object({
		update: z.union([
			z.lazy(() => ProgramUpdateWithoutProjectInputObjectSchema),
			z.lazy(() => ProgramUncheckedUpdateWithoutProjectInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => ProgramCreateWithoutProjectInputObjectSchema),
			z.lazy(() => ProgramUncheckedCreateWithoutProjectInputObjectSchema)
		])
	})
	.strict();

export const ProgramUpsertWithoutProjectInputObjectSchema = Schema;
