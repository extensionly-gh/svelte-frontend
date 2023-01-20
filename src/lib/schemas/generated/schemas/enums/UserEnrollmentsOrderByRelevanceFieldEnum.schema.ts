import { z } from 'zod';

export const UserEnrollmentsOrderByRelevanceFieldEnumSchema = z.enum([
	'id',
	'userId',
	'activityId'
]);
