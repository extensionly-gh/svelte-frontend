import { z } from 'zod';

export const VerificationScalarFieldEnumSchema = z.enum([
	'id',
	'userId',
	'token',
	'type',
	'isVerified',
	'liftCooldownAt',
	'createdAt',
	'updatedAt'
]);
