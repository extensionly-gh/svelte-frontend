import { z } from 'zod';

export const UserEnrollmentsScalarFieldEnumSchema = z.enum([
	'id',
	'userId',
	'activityId',
	'createdAt',
	'updatedAt',
	'status'
]);
