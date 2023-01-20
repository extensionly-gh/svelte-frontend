import { z } from 'zod';
import { ActivityCreateInputObjectSchema } from './objects/ActivityCreateInput.schema';
import { ActivityUncheckedCreateInputObjectSchema } from './objects/ActivityUncheckedCreateInput.schema';

export const ActivityCreateOneSchema = z.object({
	data: z.union([ActivityCreateInputObjectSchema, ActivityUncheckedCreateInputObjectSchema])
});
