import { z } from 'zod';
import { ActivityWhereUniqueInputObjectSchema } from './objects/ActivityWhereUniqueInput.schema';

export const ActivityDeleteOneSchema = z.object({ where: ActivityWhereUniqueInputObjectSchema });
