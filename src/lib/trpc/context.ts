import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export async function createContext(event: RequestEvent) {
	return {
		session: await event.locals.getSession(),
		canSendEmail: !(event.request.headers.get('x-send-email') === 'false')
	};
}

export type Context = inferAsyncReturnType<typeof createContext>;
