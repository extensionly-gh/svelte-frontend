import { z } from 'zod';
import { UserCreateNestedOneWithoutVerificationInputObjectSchema } from './UserCreateNestedOneWithoutVerificationInput.schema';
import { VerificationTypeSchema } from '../enums/VerificationType.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VerificationCreateInput> = z
	.object({
		id: z.string().optional(),
		user: z.lazy(() => UserCreateNestedOneWithoutVerificationInputObjectSchema),
		token: z.string().optional().nullable(),
		type: z.lazy(() => VerificationTypeSchema),
		isVerified: z.boolean().optional(),
		liftCooldownAt: z.date(),
		createdAt: z.date().optional(),
		updatedAt: z.date().optional()
	})
	.strict();

export const VerificationCreateInputObjectSchema = Schema;
