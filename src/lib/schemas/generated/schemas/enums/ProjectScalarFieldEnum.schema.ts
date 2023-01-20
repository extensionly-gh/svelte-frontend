import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum([
	'id',
	'name',
	'programId',
	'faculty',
	'acceptStudentsProposals',
	'createdAt',
	'updatedAt',
	'visibility'
]);
