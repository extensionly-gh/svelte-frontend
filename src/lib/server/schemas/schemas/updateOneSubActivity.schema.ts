import { z } from 'zod';
import { SubActivityUpdateInputObjectSchema } from './objects/SubActivityUpdateInput.schema';
import { SubActivityUncheckedUpdateInputObjectSchema } from './objects/SubActivityUncheckedUpdateInput.schema';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';

export const SubActivityUpdateOneSchema = z.object({
	data: z.union([SubActivityUpdateInputObjectSchema, SubActivityUncheckedUpdateInputObjectSchema]),
	where: SubActivityWhereUniqueInputObjectSchema
});
