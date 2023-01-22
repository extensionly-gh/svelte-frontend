import { toastError } from '$lib/components/toast';
import { TRPCClientError } from '@trpc/client';
import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';

export const handleErrorInClient = (error: unknown) => {
	if (error instanceof TRPCClientError) {
		return toastError(get(_)(error.message));
	}
	toastError(get(_)('exceptions.generic'));
};
