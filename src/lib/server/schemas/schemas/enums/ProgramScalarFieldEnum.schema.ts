import { z } from 'zod';

export const ProgramScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'faculty',
	'createdAt',
	'updatedAt',
	'visibility'
]);
