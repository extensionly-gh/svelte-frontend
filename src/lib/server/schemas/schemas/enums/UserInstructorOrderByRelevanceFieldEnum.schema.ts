import { z } from 'zod';

export const UserInstructorOrderByRelevanceFieldEnumSchema = z.enum([
	'id',
	'userId',
	'subActivityId'
]);
