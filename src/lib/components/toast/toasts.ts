import { toast } from '@zerodevx/svelte-toast';
import { CheckmarkIcon, ExclamationIcon, InfoIcon, WarningIcon } from './icon-svgs';

const generateHtml = (icon: string, msg: string) =>
	`<div data-testid="toast-body" class="flex gap-2 items-center text-sm">${icon} ${msg}<div>`;

const getDuration = (msg: string) => {
	// duration = 90 words/min = 1.8 words/sec * 1000 ms/sec
	const words = msg.split(' ').length;
	const duration = (words * 1000) / 1.5;
	return duration;
};

export const toastSuccess = (msg: string) =>
	toast.push(generateHtml(CheckmarkIcon, msg), {
		classes: ['toast-success dark:toast-success-dark'],
		duration: getDuration(msg)
	});

export const toastWarning = (msg: string) =>
	toast.push(generateHtml(WarningIcon, msg), {
		classes: ['toast-warning dark:toast-warning-dark'],
		duration: getDuration(msg)
	});

export const toastInfo = (msg: string, options: ToastOptions = { initial: 1 }) =>
	toast.push(generateHtml(InfoIcon, msg), {
		classes: ['toast-info dark:toast-info-dark'],
		duration: getDuration(msg),
		initial: options.initial
	});

export const toastError = (msg: string) =>
	toast.push(generateHtml(ExclamationIcon, msg), {
		classes: ['toast-error dark:toast-error-dark'],
		duration: getDuration(msg)
	});

interface ToastOptions {
	initial: number;
}
