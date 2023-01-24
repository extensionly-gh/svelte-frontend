import { z } from 'zod';

export const searchSchema = z.object({
	search: z.string().max(100, 'zod.strings.max')
});
