import { z } from 'zod';

export const UserInstructorScalarFieldEnumSchema = z.enum([
	'id',
	'userId',
	'subActivityId',
	'createdAt',
	'updatedAt',
	'invitationStatus'
]);
