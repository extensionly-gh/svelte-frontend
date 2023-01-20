import { z } from 'zod';
import { ActivityUpdateManyMutationInputObjectSchema } from './objects/ActivityUpdateManyMutationInput.schema';
import { ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';

export const ActivityUpdateManySchema = z.object({
	data: ActivityUpdateManyMutationInputObjectSchema,
	where: ActivityWhereInputObjectSchema.optional()
});
