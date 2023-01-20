import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';

export const ActivityFindUniqueSchema = z.object({ where: ActivityWhereUniqueInputObjectSchema });
