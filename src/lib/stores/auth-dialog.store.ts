import { writable } from 'svelte/store';

interface AuthDialog {
	isOpen: boolean;
	context?: 'signin' | 'signup' | 'forgotpw';
}

export const authDialog = writable<AuthDialog>({ isOpen: false, context: 'signin' });
