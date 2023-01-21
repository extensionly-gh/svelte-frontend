import type { RequestHandler } from './$types';

// Sets a cookie to SSR the user language
export const PUT = (async ({ request }) => {
	const { lang } = await request.json();

	return new Response(null, {
		status: 204,
		headers: {
			'Set-Cookie': `lang=${lang} ; SameSite=Strict ; Secure ; Path=/ ;`
		}
	});
}) satisfies RequestHandler;
