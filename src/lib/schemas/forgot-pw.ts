import { z } from 'zod';
import { baseZodObjects } from './strings';

export const forgotpwSchema = z.object({ email: baseZodObjects.strings.email });
