import { z } from 'zod';
import { SubActivityWhereInputObjectSchema } from './objects/SubActivityWhereInput.schema';

export const SubActivityDeleteManySchema = z.object({
	where: SubActivityWhereInputObjectSchema.optional()
});
