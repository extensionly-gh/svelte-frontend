import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './VerificationWhereUniqueInput.schema';
import { VerificationUpdateWithoutUserInputObjectSchema } from './VerificationUpdateWithoutUserInput.schema';
import { VerificationUncheckedUpdateWithoutUserInputObjectSchema } from './VerificationUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUpdateWithWhereUniqueWithoutUserInput> = z
	.object({
		where: z.lazy(() => VerificationWhereUniqueInputObjectSchema),
		data: z.union([
			z.lazy(() => VerificationUpdateWithoutUserInputObjectSchema),
			z.lazy(() => VerificationUncheckedUpdateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const VerificationUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
