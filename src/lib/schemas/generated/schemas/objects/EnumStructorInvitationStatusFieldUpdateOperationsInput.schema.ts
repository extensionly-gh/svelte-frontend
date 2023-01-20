import { z } from 'zod';
import { StructorInvitationStatusSchema } from '../enums/StructorInvitationStatus.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumStructorInvitationStatusFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => StructorInvitationStatusSchema).optional()
	})
	.strict();

export const EnumStructorInvitationStatusFieldUpdateOperationsInputObjectSchema = Schema;
