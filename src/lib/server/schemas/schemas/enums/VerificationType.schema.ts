import { z } from 'zod';

export const VerificationTypeSchema = z.enum([
	'VALIDATE_EMAIL',
	'VALIDATE_PHONE',
	'RESET_PASSWORD'
]);
