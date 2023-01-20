import { z } from 'zod';
import { ActivityCreateManyInputObjectSchema } from './objects/ActivityCreateManyInput.schema';

export const ActivityCreateManySchema = z.object({
	data: z.union([ActivityCreateManyInputObjectSchema, z.array(ActivityCreateManyInputObjectSchema)])
});
