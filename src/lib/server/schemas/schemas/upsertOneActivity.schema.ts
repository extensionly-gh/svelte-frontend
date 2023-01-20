import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';
import { ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema';
import { ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema';
import { ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema';
import { ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema';

export const ActivityUpsertSchema = z.object({
	where: ActivityWhereUniqueInputObjectSchema,
	create: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema]),
	update: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema])
});
