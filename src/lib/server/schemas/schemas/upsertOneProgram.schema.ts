import { z } from 'zod';
import { ProgramWhereUniqueInputObjectSchema } from './objects/ProgramWhereUniqueInput.schema';
import { ProgramCreateInputObjectSchema } from './objects/ProgramCreateInput.schema';
import { ProgramUncheckedCreateInputObjectSchema } from './objects/ProgramUncheckedCreateInput.schema';
import { ProgramUpdateInputObjectSchema } from './objects/ProgramUpdateInput.schema';
import { ProgramUncheckedUpdateInputObjectSchema } from './objects/ProgramUncheckedUpdateInput.schema';

export const ProgramUpsertSchema = z.object({
	where: ProgramWhereUniqueInputObjectSchema,
	create: z.union([ProgramCreateInputObjectSchema, ProgramUncheckedCreateInputObjectSchema]),
	update: z.union([ProgramUpdateInputObjectSchema, ProgramUncheckedUpdateInputObjectSchema])
});
