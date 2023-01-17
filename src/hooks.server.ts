import type { Handle } from '@sveltejs/kit'
import { locale } from 'svelte-i18n'
import { SvelteKitAuth } from '@auth/sveltekit'
import CredentialsProvider from '@auth/core/providers/credentials'
import GoogleProvider from '@auth/core/providers/google'
import { sequence } from '@sveltejs/kit/hooks'
import { prisma } from '$lib/server/singletons'
import { comparePassword } from '$lib/server/utils'
import { theme } from '$lib/stores'
import { env } from '$env/dynamic/private'

const handleLocale: Handle = async ({ event, resolve }) => {
	const lang = event.cookies.get('lang')
	if (lang) {
		locale.set(lang)
	}
	return resolve(event)
}

const handleTheme: Handle = async ({ event, resolve }) => {
	const userTheme = event.cookies.get('theme') as 'winter' | 'night' | undefined | null
	theme.set(userTheme || 'winter')
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

	providers: [
		// @ts-expect-error SvelteKitAuth is still in experimental
		GoogleProvider({
			clientId: env.GOOGLE_WEB_CLIENT_ID,
			clientSecret: env.GOOGLE_WEB_CLIENT_SECRET,
			async profile(profile) {
				let user = await prisma.user.findUnique({
					where: {
						email: profile.email,
					}
				});

				if (!user) {
					user = await prisma.user.create({
						data: {
							email: profile.email,
							name: profile.name,
							picture: profile.picture,
							isTermsAccepted: true,
						}
					})
				}

				// if (profile.locale) {
				// 	locale.set(profile.locale)
				// 	fetch('/api/locale', {
				// 		method: 'PUT',
				// 		body: JSON.stringify({ lang: profile.locale })
				// 	})
				// }

				console.log(user)

				return user
			}
		}),
		// @ts-expect-error SvelteKitAuth is still in experimental
		CredentialsProvider({
			async authorize(cred) {
				const user = await prisma.user.findUnique({
					where: {
						email: cred?.email,
					},
				});

				if (!user || !(await comparePassword(cred!.password, user.password!))) {
					throw new Error('exceptions.users.user-not-found');
				}

				return user;
			}
		})
	],
})

export const handle = sequence(handleLocale, handleTheme, setAuth)