import { z } from 'zod';

export const userUpdateSchema = z.object({
	name: z.string().min(3, 'validations.string.min').max(255, 'validations.string.max'),
	email: z.string().email('validations.email.invalid'),
	phone: z.string().min(10, 'validations.string.min').max(20, 'validations.string.max').nullable().or(z.literal('')),
	image: z.string().url('validations.url.invalid').nullable().or(z.literal('')),
});
