import { z } from 'zod';

export const ProjectOrderByRelevanceFieldEnumSchema = z.enum([
	'id',
	'name',
	'programId',
	'faculty'
]);
