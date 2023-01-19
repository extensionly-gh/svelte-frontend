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
		user: Pick<import('@prisma/client').User, 'id' | 'name' | 'email' | 'image'>;
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
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code"
				}
			},
			async profile(profile, tokens) {
				let user = await prisma.user.findUnique({
					where: {
						email: profile.email,
					}
				});

				if (!user) {
					try {
						const phoneNumberResponse = await fetch('https://people.googleapis.com/v1/people/me?personFields=phoneNumbers', {
							headers: {
								Authorization: `Bearer ${tokens.access_token}`
							}
						});

						const json = await phoneNumberResponse.json();
						let phone;

						if (json?.phoneNumbers && json.phoneNumbers.length > 0) {
							phone = json.phoneNumbers[0].canonicalForm;
						}

						user = await prisma.user.create({
							data: {
								email: profile.email,
								name: profile.name,
								image: profile.picture,
								phone,
								Verification: {
									create: {
										type: 'VALIDATE_EMAIL',
										isVerified: profile.email_verified,
										liftCooldownAt: new Date()
									}
								},
								isTermsAccepted: true,
							}
						})
					} catch (error) {
						console.log(error);
						throw new Error('exceptions.users.unknown.saving-user-profile');
					}
				}

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

				if (!user) {
					throw new Error('exceptions.users.user-not-found');
				}

				// Happens if the user created an account with a social provider
				if (!user.password) {
					throw new Error('exceptions.users.password-not-set');
				}

				if (!(await comparePassword(cred!.password, user.password))) {
					throw new Error('exceptions.users.user-not-found');
				}

				return user;
			}
		})
	],
})

export const handle = sequence(handleLocale, handleTheme, setAuth)