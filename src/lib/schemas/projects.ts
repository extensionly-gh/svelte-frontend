import { z } from 'zod';
import { base } from './_base';

export const createProjectSchema = z.object({
	title: base.strings.default,
	description: base.strings.large,
	programId: base.selects.default,
	facultyId: base.selects.default,
	visibility: base.enums.visibilityType,
	acceptStudentsProposals: base.booleans.default
});
