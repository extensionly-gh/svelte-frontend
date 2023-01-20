import { z } from 'zod';
import { VerificationWhereUniqueInputObjectSchema } from './VerificationWhereUniqueInput.schema';
import { VerificationCreateWithoutUserInputObjectSchema } from './VerificationCreateWithoutUserInput.schema';
import { VerificationUncheckedCreateWithoutUserInputObjectSchema } from './VerificationUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationCreateOrConnectWithoutUserInput> = z
	.object({
		where: z.lazy(() => VerificationWhereUniqueInputObjectSchema),
		create: z.union([
			z.lazy(() => VerificationCreateWithoutUserInputObjectSchema),
			z.lazy(() => VerificationUncheckedCreateWithoutUserInputObjectSchema)
		])
	})
	.strict();

export const VerificationCreateOrConnectWithoutUserInputObjectSchema = Schema;
