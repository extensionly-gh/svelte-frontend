import { z } from 'zod';

const stringDefault = z.string().min(1, 'zod.string.min').max(255, 'zod.string.max');
const stringLarge = z.string().min(1, 'zod.string.min').max(1000, 'zod.string.max');

export const baseZodObjects = {
	enums: {
		verificationType: z.enum(['VALIDATE_EMAIL', 'VALIDATE_PHONE', 'RESET_PASSWORD'])
	},
	strings: {
		default: stringDefault,
		email: stringDefault.email('zod.email.invalid'),
		password: z
			.string()
			.min(8, 'zod.password.min')
			.max(255, 'zod.string.max')
			.refine((v) => /[A-Z]/.test(v), 'zod.string.uppercase')
			.refine((v) => /[a-z]/.test(v), 'zod.string.lowercase')
			.refine((v) => /[0-9]/.test(v), 'zod.string.numeric')
			.refine((v) => /[^A-Za-z0-9]/.test(v), 'zod.string.symbol'),
		url: stringLarge.url('zod.url.invalid')
	}
} as const;
