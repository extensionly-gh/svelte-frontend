<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import DeleteAccount from './_DeleteAccount.svelte';
	import UpdateAccountForm from './_UpdateAccountForm.svelte';
	import UpdatePasswordForm from './_UpdatePasswordForm.svelte';
	import VerifyEmailForm from './_VerifyEmailForm.svelte';

	export let data: PageData;

	const emailVerification = data.user.Verification?.find(
		(verification) => verification.type === 'VALIDATE_EMAIL'
	);
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col lg:flex-row gap-6">
		<UpdateAccountForm initialValues={data.user} />
		<UpdatePasswordForm isPasswordEmpty={data.user.isPasswordEmpty} />
	</div>
	{#if emailVerification}
		<VerifyEmailForm verification={emailVerification} />
	{/if}
	<DeleteAccount />
</div>
