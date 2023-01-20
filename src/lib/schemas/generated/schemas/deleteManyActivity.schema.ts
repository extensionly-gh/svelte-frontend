import { z } from 'zod';
import { ActivityWhereInputObjectSchema } from './objects/ActivityWhereInput.schema';

export const ActivityDeleteManySchema = z.object({
	where: ActivityWhereInputObjectSchema.optional()
});
