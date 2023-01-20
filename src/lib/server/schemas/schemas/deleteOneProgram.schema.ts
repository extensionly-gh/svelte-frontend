import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';

export const ProgramDeleteOneSchema = z.object({ where: ProgramWhereUniqueInputObjectSchema });
