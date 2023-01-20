import { z } from 'zod';

export const StructorInvitationStatusSchema = z.enum(['INVITED', 'PRE_REGISTRATION', 'ACCEPTED']);
