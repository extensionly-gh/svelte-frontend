import { z } from 'zod';
import { RoleSchema } from '../enums/Role.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumRoleFieldUpdateOperationsInput> = z
	.object({
		set: z.lazy(() => RoleSchema).optional()
	})
	.strict();

export const EnumRoleFieldUpdateOperationsInputObjectSchema = Schema;
