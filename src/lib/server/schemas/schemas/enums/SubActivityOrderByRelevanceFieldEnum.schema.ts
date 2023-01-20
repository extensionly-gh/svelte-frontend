import { z } from 'zod';

export const SubActivityOrderByRelevanceFieldEnumSchema = z.enum([
	'id',
	'name',
	'description',
	'location',
	'activityId'
]);
