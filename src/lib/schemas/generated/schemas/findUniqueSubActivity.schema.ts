import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';

export const SubActivityFindUniqueSchema = z.object({
	where: SubActivityWhereUniqueInputObjectSchema
});
