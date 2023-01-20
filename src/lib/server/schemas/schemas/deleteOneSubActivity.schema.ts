import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';

export const SubActivityDeleteOneSchema = z.object({
	where: SubActivityWhereUniqueInputObjectSchema
});
