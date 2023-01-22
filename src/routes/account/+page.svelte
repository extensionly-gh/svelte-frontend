<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import CreatePasswordForm from './_CreatePasswordForm.svelte';
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
		<UpdateAccountForm
			initialValues={{
				email: data.user.email,
				name: data.user.name,
				phone: data.user.phone ?? '',
				image: data.user.image
			}}
		/>
		{#if data.user.isPasswordEmpty}
			<CreatePasswordForm />
		{:else}
			<UpdatePasswordForm />
		{/if}
	</div>
	{#if emailVerification}
		<VerifyEmailForm
			verification={{
				liftCooldownAt: emailVerification.liftCooldownAt.toISOString(),
				isVerified: emailVerification.isVerified,
				type: emailVerification.type
			}}
		/>
	{/if}
	<DeleteAccount />
</div>
