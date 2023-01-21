import type { AppRouterOutput } from '$lib/trpc/router';
import { z } from 'zod';

export const userUpdateSchema: z.ZodType<AppRouterOutput['user']['getUpdatableProperties']> = z.object({
	name: z.string().min(3, 'validations.string.min').max(255, 'validations.string.max'),
	email: z.string().email('validations.email.invalid'),
	phone: z.string().min(10, 'validations.string.min').max(20, 'validations.string.max'),
	image: z.string().url('validations.url.invalid'),
});
