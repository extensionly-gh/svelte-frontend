import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';

export const ProgramFindUniqueSchema = z.object({ where: ProgramWhereUniqueInputObjectSchema });
