import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectFindUniqueSchema = z.object({ where: ProjectWhereUniqueInputObjectSchema });
