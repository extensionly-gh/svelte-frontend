import { z } from 'zod';
import { ProjectWhereUniqueInputObjectSchema } from './objects/ProjectWhereUniqueInput.schema';

export const ProjectDeleteOneSchema = z.object({ where: ProjectWhereUniqueInputObjectSchema });
