import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './VerificationWhereUniqueInput.schema';
import { VerificationUpdateWithoutUserInputObjectSchema } from './VerificationUpdateWithoutUserInput.schema';
import { VerificationUncheckedUpdateWithoutUserInputObjectSchema } from './VerificationUncheckedUpdateWithoutUserInput.schema';
import { VerificationCreateWithoutUserInputObjectSchema } from './VerificationCreateWithoutUserInput.schema';
import { VerificationUncheckedCreateWithoutUserInputObjectSchema } from './VerificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUpsertWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => VerificationWhereUniqueInputObjectSchema),
		update: z.union([
			z.lazy(() => VerificationUpdateWithoutUserInputObjectSchema),
			z.lazy(() => VerificationUncheckedUpdateWithoutUserInputObjectSchema)
		]),
		create: z.union([
			z.lazy(() => VerificationCreateWithoutUserInputObjectSchema),
			z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const VerificationUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema;
