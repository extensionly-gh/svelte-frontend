import { z } from 'zod';
import { base } from './_base';

export const forgotpwSchema = z.object({ email: base.strings.email });
