import { z } from 'zod';
import { SubActivityWhereUniqueInputObjectSchema } from './objects/SubActivityWhereUniqueInput.schema';
import { SubActivityCreateInputObjectSchema } from './objects/SubActivityCreateInput.schema';
import { SubActivityUncheckedCreateInputObjectSchema } from './objects/SubActivityUncheckedCreateInput.schema';
import { SubActivityUpdateInputObjectSchema } from './objects/SubActivityUpdateInput.schema';
import { SubActivityUncheckedUpdateInputObjectSchema } from './objects/SubActivityUncheckedUpdateInput.schema';

export const SubActivityUpsertSchema = z.object({
	where: SubActivityWhereUniqueInputObjectSchema,
	create: z.union([
		SubActivityCreateInputObjectSchema,
		SubActivityUncheckedCreateInputObjectSchema
	]),
	update: z.union([SubActivityUpdateInputObjectSchema, SubActivityUncheckedUpdateInputObjectSchema])
});
