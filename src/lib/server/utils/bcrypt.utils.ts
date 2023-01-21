import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
	const rounds = 10;
	const salt = await bcrypt.genSalt(rounds);
	return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> =>
	await bcrypt.compare(password, hash);
