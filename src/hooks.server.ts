import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'
import { SvelteKitAuth } from '@auth/sveltekit'
import CredentialsProvider from '@auth/core/providers/credentials'
import { sequence } from '@sveltejs/kit/hooks'
import { prisma } from '$lib/server/singletons'

const setLanguage: Handle = async ({ event, resolve }) => {
	const lang = event.request.headers.get('accept-language')?.split(',')[0]
	if (lang) {
		locale.set(lang)
	}
	return resolve(event)
}

const setAuth: Handle = SvelteKitAuth({
	pages: {
		signIn: '/',
		error: '/'
	},
	// @ts-expect-error SvelteKitAuth is still in experimental
	providers: [CredentialsProvider({
		async authorize(cred) {
			const user = await prisma.user.findUnique({
				where: {
					email: cred?.email,
				},
				include: { Verification: { select: { type: true, isVerified: true, liftCooldownAt: true } } },
			});

			if (!user) {
				throw new Error('exceptions.users.user-not-found');
			}

			return user;
		}
	})],
})

export const handle = sequence(setLanguage, setAuth)