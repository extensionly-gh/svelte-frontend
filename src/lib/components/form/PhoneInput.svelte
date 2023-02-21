<script lang="ts">
	import '$lib/styles/flags.css';
	import TelInput, { clickOutsideAction, getCurrentCountry } from 'svelte-tel-input';
	import type { CountryCode, E164Number, NormalizedTelNumber } from 'svelte-tel-input/types';
	import { _ } from 'svelte-i18n';
	import PhoneCountryPicker from './PhoneCountryPicker.svelte';

	export let id: string;
	export let label: string;
	export let isValid: boolean;
	export let isTouched: boolean;
	export let parsedValue: string;

	export let parsedTelInput: NormalizedTelNumber | null = null;
	export let value: E164Number | null = '';

	let selected: CountryCode = 'BR';
	let isOpen = false;

	$: isValid = parsedTelInput?.isValid ?? false;

	$: parsedValue = (parsedTelInput?.e164 as string) ?? '';

	function handleInput(e: any) {
		isTouched = true;
		if (e.target.value === '') {
			parsedTelInput = null;
		}
	}
</script>

<label class="flex flex-col items-start gap-1 w-full" for={id + '-shell'}>
	<span class="label-text">{label}</span>
	<div class="flex rounded-md gap-2 w-full" use:clickOutsideAction={() => (isOpen = false)}>
		<PhoneCountryPicker bind:selected bind:isOpen />

		<TelInput
			maxlength={20}
			id={id + '-shell'}
			{...$$restProps}
			on:input={handleInput}
			bind:country={selected}
			bind:parsedTelInput
			bind:value
			class="border bg-base-200 focus:outline-none input p-2 h-[2.5rem] rounded-md placeholder:text-base-content/40 placeholder:text-sm w-full text-sm {!isValid &&
			isTouched
				? `border-error border-2`
				: `focus:border-base-content/40`} text-sm rounded-r-md block w-full p-2.5 
             focus:outline-none"
		/>
		<input {id} name={id} type="hidden" bind:value={parsedValue} />
	</div>
	{#if !isValid && isTouched}
		<span class="text-error font-bold text-xs mb-1 h-2" data-testid={`${id}-error`}>
			{$_('zod.phone.invalid')}
		</span>
	{/if}
</label>
