import { goto } from '$app/navigation';
import { toastError } from '$lib/components/toast';
import { TRPCClientError } from '@trpc/client';
import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';

export const handleErrorInClient = (error: unknown, redirect?: string) => {
	if (error instanceof TRPCClientError) {
		if (redirect) {
			toastError(get(_)(error.message));
			goto(redirect, { replaceState: true });
			return;
		}
		return toastError(get(_)(error.message));
	}
	return toastError(get(_)('exceptions.generic'));
};
