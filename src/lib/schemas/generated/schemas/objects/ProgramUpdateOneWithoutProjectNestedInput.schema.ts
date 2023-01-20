import { z } from 'zod';
import { ProgramCreateWithoutProjectInputObjectSchema } from './ProgramCreateWithoutProjectInput.schema';
import { ProgramUncheckedCreateWithoutProjectInputObjectSchema } from './ProgramUncheckedCreateWithoutProjectInput.schema';
import { ProgramCreateOrConnectWithoutProjectInputObjectSchema } from './ProgramCreateOrConnectWithoutProjectInput.schema';
import { ProgramUpsertWithoutProjectInputObjectSchema } from './ProgramUpsertWithoutProjectInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './ProgramWhereUniqueInput.schema';
import { ProgramUpdateWithoutProjectInputObjectSchema } from './ProgramUpdateWithoutProjectInput.schema';
import { ProgramUncheckedUpdateWithoutProjectInputObjectSchema } from './ProgramUncheckedUpdateWithoutProjectInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProgramUpdateOneWithoutProjectNestedInput> = z
	.object({
		create: z
			.union([
				z.lazy(() => ProgramCreateWithoutProjectInputObjectSchema),
				z.lazy(() => ProgramUncheckedCreateWithoutProjectInputObjectSchema)
			])
			.optional(),
		connectOrCreate: z.lazy(() => ProgramCreateOrConnectWithoutProjectInputObjectSchema).optional(),
		upsert: z.lazy(() => ProgramUpsertWithoutProjectInputObjectSchema).optional(),
		disconnect: z.boolean().optional(),
		delete: z.boolean().optional(),
		connect: z.lazy(() => ProgramWhereUniqueInputObjectSchema).optional(),
		update: z
			.union([
				z.lazy(() => ProgramUpdateWithoutProjectInputObjectSchema),
				z.lazy(() => ProgramUncheckedUpdateWithoutProjectInputObjectSchema)
			])
			.optional()
	})
	.strict();

export const ProgramUpdateOneWithoutProjectNestedInputObjectSchema = Schema;
