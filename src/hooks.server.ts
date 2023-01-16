import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'
import { SvelteKitAuth } from '@auth/sveltekit'
import CredentialsProvider from '@auth/core/providers/credentials'
import { sequence } from '@sveltejs/kit/hooks'
import { prisma } from '$lib/server/singletons'
import { comparePassword } from '$lib/server/utils'

const setLanguage: Handle = async ({ event, resolve }) => {
	const lang = event.cookies.get('lang')
	if (lang) {
		locale.set(lang)
	}
	return resolve(event)
}

declare module '@auth/core/types' {
	interface Session {
		user: Pick<import('@prisma/client').User, 'id' | 'name' | 'email'>;
	}
}

const setAuth: Handle = SvelteKitAuth({
	pages: {
		signIn: '/',
		error: '/'
	},
	callbacks: {
		async session(params) {
			// Add user id to session object which is sent to the client
			params.session.user.id = params.token!.sub!
			return params.session
		}
	},
	// @ts-expect-error SvelteKitAuth is still in experimental
	providers: [CredentialsProvider({
		async authorize(cred) {
			const user = await prisma.user.findUnique({
				where: {
					email: cred?.email,
				},
			});

			if (!user || !(await comparePassword(cred!.password, user.password))) {
				throw new Error('exceptions.users.user-not-found');
			}

			return user;
		}
	})],
})

export const handle = sequence(setLanguage, setAuth)