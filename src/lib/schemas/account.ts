import { z } from 'zod';

export const userUpdateSchema = z.object({
	name: z.string().min(3, 'zod.string.min').max(255, 'zod.string.max'),
	email: z.string().email('zod.email.invalid'),
	phone: z.string().min(10, 'zod.string.min').max(20, 'zod.string.max').nullable().or(z.literal('')),
	image: z.string().url('zod.url.invalid').nullable().or(z.literal('')),
});
