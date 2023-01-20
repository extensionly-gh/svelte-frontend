import { z } from 'zod';

export const EventVisibilitySchema = z.enum(['PUBLIC', 'PRIVATE']);
