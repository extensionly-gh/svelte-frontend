import { z } from 'zod';
import { VerificationScalarWhereInputObjectSchema } from './VerificationScalarWhereInput.schema';
import { VerificationUpdateManyMutationInputObjectSchema } from './VerificationUpdateManyMutationInput.schema';
import { VerificationUncheckedUpdateManyWithoutVerificationInputObjectSchema } from './VerificationUncheckedUpdateManyWithoutVerificationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationUpdateManyWithWhereWithoutUserInput> = z
	.object({
		where: z.lazy(() => VerificationScalarWhereInputObjectSchema),
		data: z.union([
			z.lazy(() => VerificationUpdateManyMutationInputObjectSchema),
			z.lazy(() => VerificationUncheckedUpdateManyWithoutVerificationInputObjectSchema)
		])
	})
	.strict();

export const VerificationUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
