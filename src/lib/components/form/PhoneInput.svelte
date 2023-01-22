<script lang="ts">
	import '$lib/styles/flags.css';
	import TelInput, {
		normalizedCountries,
		clickOutsideAction,
		isSelected,
		getCurrentCountry
	} from 'svelte-tel-input';
	import { createEventDispatcher, onMount } from 'svelte';
	import type {
		CountryCode,
		CountrySelectEvents,
		E164Number,
		NormalizedTelNumber
	} from 'svelte-tel-input/types';
	import Button from '../button/Button.svelte';
	import IconLoading from '~icons/eos-icons/loading';
	import { _ } from 'svelte-i18n';

	let searchText = '';
	let selected: CountryCode;
	export let id: string;
	export let label: string;
	export let isValid: boolean;
	export let isTouched: boolean;
	export let parsedValue: string;
	export let clickOutside = true;
	export let closeOnClick = true;
	export let disabled = false;
	export let parsedTelInput: NormalizedTelNumber | null = null;
	export let value: E164Number | null = '';

	$: selectedCountryDialCode =
		normalizedCountries.find((el) => el.iso2 === selected)?.dialCode || null;

	let isOpen = false;

	$: isValid = parsedTelInput?.isValid ?? false;

	$: parsedValue = (parsedTelInput?.e164 as string) ?? '';

	const toggleDropDown = (e: Event) => {
		e.preventDefault();
		isOpen = !isOpen;
	};

	const closeDropdown = (e?: Event) => {
		e?.preventDefault();
		isOpen = false;
		searchText = '';
	};

	const selectClick = () => {
		if (closeOnClick) closeDropdown();
	};

	const closeOnClickOutside = () => {
		if (clickOutside) {
			closeDropdown();
		}
	};

	$: filteredItems =
		searchText && searchText.length > 0
			? normalizedCountries
					.filter((el) => el.label.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
					.sort((a, b) => (a.label < b.label ? -1 : 1))
			: normalizedCountries;

	const handleSelect = (val: CountryCode, e?: Event) => {
		if (disabled) return;
		e?.preventDefault();
		if (
			selected === undefined ||
			selected === null ||
			(typeof selected === typeof val && selected !== val)
		) {
			selected = val;
			onChange(val);
			selectClick();
		} else {
			dispatch('same', { option: val });
			selectClick();
		}
	};

	const dispatch = createEventDispatcher<CountrySelectEvents<CountryCode>>();

	const onChange = (selectedCountry: CountryCode) => {
		dispatch('change', { option: selectedCountry });
	};

	function handleInputBlur(e: any) {
		if (e.target.value === '') {
			parsedTelInput = null;
		}
	}

	onMount(async () => {
		selected = ((await getCurrentCountry()) as CountryCode) || 'BR';
	});
</script>

<label class="flex flex-col items-start gap-1 w-full" for={id + '-shell'}>
	<span class="label-text">{label}</span>
	<div class="flex rounded-md gap-2" use:clickOutsideAction={closeOnClickOutside}>
		<Button
			id="states-button"
			data-dropdown-toggle="dropdown-states"
			variants={{ intent: 'ghost' }}
			class="p-2"
			on:click={toggleDropDown}
		>
			{#if selected && selected !== null}
				<span class="flag flag-{selected.toLowerCase()} flex-shrink-0 mr-1" />
				<span>+{selectedCountryDialCode}</span>
			{:else}
				<IconLoading width="24px" height="24px" />
			{/if}
		</Button>
		{#if isOpen}
			<div
				id="dropdown-countries"
				class="z-10 max-w-fit bg-base-100 rounded divide-y divide-gray-100 absolute translate-y-11 overflow-hidden"
				data-popper-reference-hidden=""
				data-popper-escaped=""
				data-popper-placement="bottom"
				aria-orientation="vertical"
				aria-labelledby="country-button"
				tabindex="-1"
			>
				<ul
					class="text-sm max-h-48 overflow-y-auto"
					aria-labelledby="countries-button"
					role="listbox"
				>
					{#if true}
						<input
							aria-autocomplete="list"
							type="text"
							class="px-4 py-2 focus:outline-none w-full sticky top-0 bg-base-200"
							placeholder={$_('terms.search-word') + '...'}
							bind:value={searchText}
						/>
					{/if}
					{#each filteredItems as country (country.id)}
						{@const isActive = isSelected(country.iso2, selected)}
						<li role="option" aria-selected={isActive}>
							<button
								value={country.iso2}
								type="button"
								class="inline-flex py-2 px-4 w-full text-sm hover:bg-gray-100 dark:hover:bg-base-300 overflow-hidden"
								on:click={(e) => {
									handleSelect(country.iso2, e);
								}}
							>
								<div class="inline-flex items-center text-left">
									<span class="flag flag-{country.iso2.toLowerCase()} flex-shrink-0 mr-1" />
									<span class="mx-2">{country.name}</span>
									<span class=" text-gray-500">+{country.dialCode}</span>
								</div>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		<TelInput
			maxlength={20}
			id={id + '-shell'}
			{...$$restProps}
			on:blur={handleInputBlur}
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
		<span class="text-error font-bold text-xs my-2 h-2" data-testid={`${id}-error`}>
			{$_('zod.phone.invalid')}
		</span>
	{/if}
</label>
