import { z } from 'zod';
import { SubActivityCreateInputObjectSchema } from './objects/SubActivityCreateInput.schema';
import { SubActivityUncheckedCreateInputObjectSchema } from './objects/SubActivityUncheckedCreateInput.schema';

export const SubActivityCreateOneSchema = z.object({
	data: z.union([SubActivityCreateInputObjectSchema, SubActivityUncheckedCreateInputObjectSchema])
});
