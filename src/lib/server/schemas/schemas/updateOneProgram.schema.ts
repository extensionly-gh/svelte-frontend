import { z } from 'zod';
import { ProgramUpdateInputObjectSchema } from './objects/ProgramUpdateInput.schema';
import { ProgramUncheckedUpdateInputObjectSchema } from './objects/ProgramUncheckedUpdateInput.schema';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';

export const ProgramUpdateOneSchema = z.object({
	data: z.union([ProgramUpdateInputObjectSchema, ProgramUncheckedUpdateInputObjectSchema]),
	where: ProgramWhereUniqueInputObjectSchema
});
