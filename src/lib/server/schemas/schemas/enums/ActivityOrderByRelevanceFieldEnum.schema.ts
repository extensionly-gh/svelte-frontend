import { z } from 'zod';

export const ActivityOrderByRelevanceFieldEnumSchema = z.enum([
	'id',
	'title',
	'description',
	'category',
	'location',
	'prerequisites',
	'contact',
	'faculty',
	'proponentId',
	'projectId'
]);
