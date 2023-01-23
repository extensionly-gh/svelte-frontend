import { z } from 'zod';

export const name = z.string().min(1, 'zod.string.min').max(255, 'zod.string.max');
export const email = z.string().email('zod.email.invalid');
export const password = z
	.string()
	.min(8, 'zod.password.min')
	.max(255, 'zod.string.max')
	.refine((v) => /[A-Z]/.test(v), 'zod.string.uppercase')
	.refine((v) => /[a-z]/.test(v), 'zod.string.lowercase')
	.refine((v) => /[0-9]/.test(v), 'zod.string.numeric')
	.refine((v) => /[^A-Za-z0-9]/.test(v), 'zod.string.symbol');
