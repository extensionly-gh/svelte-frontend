<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from '../button/Button.svelte';
	import { normalizedCountries, clickOutsideAction, isSelected } from 'svelte-tel-input';
	import type { CountryCode, CountrySelectEvents } from 'svelte-tel-input/types';
	import { createEventDispatcher, onMount } from 'svelte';
	import IconLoading from '~icons/eos-icons/loading';

	export let selected: CountryCode;
	export let isOpen = false;

	let searchText = '';
	let disabled = false;
	let searchInput: HTMLInputElement | null = null;

	$: selectedCountryDialCode =
		normalizedCountries.find((el) => el.iso2 === selected)?.dialCode || null;

	$: filteredItems =
		searchText && searchText.length > 0
			? normalizedCountries
					.filter((el) => el.label.toLowerCase().indexOf(searchText.toLowerCase()) >= 0)
					.sort((a, b) => (a.label < b.label ? -1 : 1))
			: normalizedCountries;

	$: {
		if (isOpen) {
			searchInput?.focus();
		}
	}

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
			closeDropdown();
		} else {
			dispatch('same', { option: val });
			closeDropdown();
		}
	};

	const closeDropdown = (e?: Event) => {
		e?.preventDefault();
		isOpen = false;
		searchText = '';
	};

	const dispatch = createEventDispatcher<CountrySelectEvents<CountryCode>>();

	const onChange = (selectedCountry: CountryCode) => {
		dispatch('change', { option: selectedCountry });
	};
</script>

<Button
	id="states-button"
	data-dropdown-toggle="dropdown-states"
	variants={{ intent: 'ghost' }}
	class="p-2"
	on:click={() => (isOpen = !isOpen)}
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
		<ul class="text-sm max-h-48 overflow-y-auto" aria-labelledby="countries-button" role="listbox">
			<input
				bind:this={searchInput}
				aria-autocomplete="list"
				type="text"
				class="px-4 py-2 focus:outline-none w-full sticky top-0 bg-base-200"
				placeholder={$_('terms.search-word') + '...'}
				bind:value={searchText}
			/>
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
							<span class="font-bold">+{country.dialCode}</span>
						</div>
					</button>
				</li>
			{/each}
		</ul>
	</div>
{/if}
