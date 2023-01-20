import { z } from 'zod';
import { ActivityUpdateInputObjectSchema } from './objects/ActivityUpdateInput.schema';
import { ActivityUncheckedUpdateInputObjectSchema } from './objects/ActivityUncheckedUpdateInput.schema';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';

export const ActivityUpdateOneSchema = z.object({
	data: z.union([ActivityUpdateInputObjectSchema, ActivityUncheckedUpdateInputObjectSchema]),
	where: ActivityWhereUniqueInputObjectSchema
});
