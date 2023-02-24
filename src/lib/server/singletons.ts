import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client';
import { Configuration, SMTPApi } from './adapters/sendinblue/apiclient';

const singletonsGlobal = global as typeof global & {
	prisma?: PrismaClient;
	sendInBlueApi: SMTPApi;
};

export const prisma: PrismaClient =
	singletonsGlobal.prisma ||
	new PrismaClient({
		log: env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error']
	});

export const sendInBlueApi: SMTPApi =
	singletonsGlobal.sendInBlueApi ||
	new SMTPApi(new Configuration({ apiKey: env.SENDINBLUE_API_KEY }));

if (env.NODE_ENV !== 'production') {
	singletonsGlobal.prisma = prisma;
	singletonsGlobal.sendInBlueApi = sendInBlueApi;
}
