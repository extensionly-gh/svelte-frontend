import { z } from 'zod';
import { SubActivityUpdateManyMutationInputObjectSchema } from './objects/SubActivityUpdateManyMutationInput.schema';
import { SubActivityWhereInputObjectSchema } from './objects/SubActivityWhereInput.schema';

export const SubActivityUpdateManySchema = z.object({
	data: SubActivityUpdateManyMutationInputObjectSchema,
	where: SubActivityWhereInputObjectSchema.optional()
});
