import type { RequestHandler } from './$types';

// Sets a cookie to SSR the user preferred theme
export const PUT = (async ({ request }) => {
	const { theme } = await request.json();

	return new Response(null, {
		status: 204,
		headers: {
			'Set-Cookie': `theme=${theme} ; SameSite=Strict ; Secure ; Path=/ ;`
		}
	});
}) satisfies RequestHandler;
