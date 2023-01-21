import { env } from '$env/dynamic/private';
import { PrismaClient } from '@prisma/client';
//@ts-expect-error npm does not have types for this import
import SibApiV3Sdk from 'sib-api-v3-sdk';

const singletonsGlobal = global as typeof global & {
	prisma?: PrismaClient;
	sendInBlueApi?: any;
};

export const prisma: PrismaClient =
	singletonsGlobal.prisma ||
	new PrismaClient({
		log: env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error']
	});

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = env.SENDINBLUE_API_KEY;

export const sendInBlueApi =
	singletonsGlobal.sendInBlueApi || new SibApiV3Sdk.TransactionalEmailsApi();

if (env.NODE_ENV !== 'production') {
	singletonsGlobal.prisma = prisma;
	singletonsGlobal.sendInBlueApi = sendInBlueApi;
}
