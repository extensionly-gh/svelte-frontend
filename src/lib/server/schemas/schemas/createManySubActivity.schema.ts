import { z } from 'zod';
import { SubActivityCreateManyInputObjectSchema } from './objects/SubActivityCreateManyInput.schema';

export const SubActivityCreateManySchema = z.object({
	data: z.union([
		SubActivityCreateManyInputObjectSchema,
		z.array(SubActivityCreateManyInputObjectSchema)
	])
});
