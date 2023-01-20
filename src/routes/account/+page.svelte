<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import SettingsCard from './_SettingsCard.svelte';
	import { page } from '$app/stores';
	import { createForm } from 'felte';
	import type { z } from 'zod';
	import { userWithEmailSchema, userWithNameSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';
	import { toastSuccess } from '$lib/components/toast';
	import IconCircleWavyWarning from '~icons/ph/circle-wavy-warning-fill';
	import IconCircleWavyCheck from '~icons/ph/circle-wavy-check-fill';
	import type { Verification } from '@prisma/client';
	import { ButtonWithTimer } from '$lib/components/button';
	import { DateTime } from 'luxon';
	import type { PageData } from './$types';

	let date = DateTime.now().toISO();

	export let data: PageData;

	const emailVerification = data.verifications?.find(
		(verification: Verification) => verification.type === 'VALIDATE_EMAIL'
	);

	const {
		form: nameForm,
		errors: nameErrors,
		isSubmitting: nameIsSubmitting,
		data: nameData
	} = createForm<z.infer<typeof userWithNameSchema>>({
		initialValues: {
			name: $page.data.session?.user?.name || ''
		},
		onSuccess() {
			sendSuccessToast('name');
		},
		validate: validateSchema(userWithNameSchema)
	});

	function sendSuccessToast(fieldId: string) {
		toastSuccess($_(`pages.account.${fieldId}.success`));
	}

	function handleVerifyEmail() {
		console.log('handleVerifyEmail');
		date = DateTime.now().plus({ seconds: 5 }).toISO();
	}
</script>

<div class="flex flex-col gap-6">
	<form
		use:nameForm
		method="POST"
		action="/account?/updateName"
		enctype="application/x-www-form-urlencoded"
	>
		<SettingsCard title={$_('pages.account.name.title')}>
			<TextInput
				error={$nameErrors.name?.[0]}
				maxlength="255"
				id="name"
				label={$_('pages.account.name.description')}
			>
				<Button
					slot="right"
					disabled={$nameData.name === $page.data.session?.user.name}
					isLoading={$nameIsSubmitting}
					type="submit"
					class="h-full">{$_('terms.save')}</Button
				>
			</TextInput>
		</SettingsCard>
	</form>
	<form action="">
		<SettingsCard title={$_('pages.account.email.title')}>
			{#if !emailVerification?.isVerified}
				<div class="flex gap-2 items-center text-error dark:brightness-75 flex-grow">
					<IconCircleWavyWarning width="32px" height="32px" />
					<span class="font-semibold">{$_('pages.account.email.not-yet-verified')}</span>
				</div>
				<ButtonWithTimer class="min-w-[5.5rem]" endTime={date} onSubmit={() => handleVerifyEmail()}>
					{$_('pages.account.email.resend-email')}
				</ButtonWithTimer>
			{:else}
				<div class="flex gap-2 items-center w-full text-success dark:brightness-75">
					<IconCircleWavyCheck width="32px" height="32px" />
					<span class="font-semibold">{$_('pages.account.email.email-verified')}</span>
				</div>
			{/if}
		</SettingsCard>
	</form>
	<!--
	<Formik
		initialValues={{ avatar: '' }}
		onSubmit={() => {
			return;
		}}
	>
		<SettingsCard info={$_('pages.account.avatar.info')} title={$_('pages.account.avatar.title')}>
			<p>{$_('pages.account.avatar.description')}</p>
			<div class="w-full flex items-center justify-center">
				<Button class="btn-circle btn-lg" intent="ghost" onClick={handleAvatarClick}>
					<UserCirclePlus size={64} weight="fill" />
				</Button>
			</div>
			<input
				accept=".png,.jfif,.pjpeg,.jpeg,.pjp,.jpg"
				hidden
				name="avatar"
				onChange={handleAvatarInputChange}
				ref={avatarInputRef}
				type="file"
			/>
		</SettingsCard>
	</Formik> -->
	<!-- <SettingsCard
    action={
      <Dialog
        description={$_('pages.account.delete.dialog.description')}
        title={$_('pages.account.delete.dialog.title')}
        trigger={
          <Button data-testid="delete-account-dialog-trigger" intent="danger" size="sm">
            {$_('pages.account.delete.dialog.trigger')}
          </Button>
        }
      >
        <span class="font-semibold">{user?.email}</span>
        <Formik
          initialErrors={{ 'delete-email': 'required' }}
          initialValues={{ 'delete-email': '' }}
          onSubmit={() => handleDeleteAccount()}
          validationSchema={yup.object().shape({
            'delete-email': yup.string().required().equals([user?.email]),
          })}
        >
          {({ isValid, isSubmitting }) => (
            <Form class="flex flex-col">
              <TextInput intent="darker" name="delete-email" showErrors={false} />
              <Button
                data-testid="delete-account-dialog-confirm-btn"
                disabled={!isValid || isSubmitting}
                intent="danger"
                isLoading={isSubmitting}
                size="sm"
                type="submit"
              >
                {$_('pages.account.delete.dialog.confirm')}
              </Button>
            </Form>
          )}
        </Formik>
      </Dialog>
    }
    info={$_('pages.account.delete.info')}
    intent="danger"
    title={$_('pages.account.delete.title')}
  >
    <p>{$_('pages.account.delete.description')}</p>
  </SettingsCard> -->
</div>
