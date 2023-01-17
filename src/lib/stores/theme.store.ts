import { writable } from 'svelte/store';

export type Theme = 'winter' | 'night' | undefined | null;

export const theme = writable<Theme>('winter');