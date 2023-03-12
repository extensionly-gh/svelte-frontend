import { z } from 'zod';

const stringDefault = z
	.string({ required_error: 'zod.string.required', invalid_type_error: 'zod.string.required' })
	.min(1, 'zod.string.required')
	.max(255, 'zod.string.max');
const stringLarge = z.string().min(1, 'zod.string.required').max(1000, 'zod.string.max');

export const base = {
	enums: {
		visibilityType: z.enum(['PUBLIC', 'PRIVATE']).default('PUBLIC'),
		verificationType: z.enum(['VALIDATE_EMAIL', 'VALIDATE_PHONE', 'RESET_PASSWORD'])
	},
	booleans: {
		default: z.boolean().default(false)
	},
	selects: {
		default: z
			.string({ required_error: 'zod.select.invalid', invalid_type_error: 'zod.select.invalid' })
			.min(1, 'zod.select.invalid')
			.max(255, 'zod.select.invalid')
	},
	strings: {
		default: stringDefault,
		large: stringLarge,
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
