<script lang="ts">
	import { Button, TextInput } from '$lib/components';
	import { _ } from 'svelte-i18n';
	import SettingsCard from './_SettingsCard.svelte';
	import { page } from '$app/stores';
	import { createForm } from 'felte';
	import type { z } from 'zod';
	import { userWithNameSchema } from '$lib/schemas';
	import { validateSchema } from '@felte/validator-zod';

	const { form: nameForm, errors: nameErrors } = createForm<z.infer<typeof userWithNameSchema>>({
		validate: validateSchema(userWithNameSchema)
	});
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
			/>
			<Button type="submit" class="h-full">{$_('terms.save')}</Button>
		</SettingsCard>
	</form>
	<!-- <Formik
		initialValues={{ email: '' }}
		onSubmit={() => {
			return;
		}}
	>
		<SettingsCard info={$_('pages.account.email.info')} title={$_('pages.account.email.title')}>
			<TextInput
				label={$_('pages.account.email.description')}
				name="email"
				type="email"
				value={user?.email}
			/>

			{#if pendingEmailVerification}
				<div class="flex gap-2 items-center text-error dark:brightness-75">
					<CircleWavyWarning size={32} weight="fill" />
					<span class="font-semibold">{$_('verification.email.not-yet-verified')}</span>
				</div>
				<ResendEmailButton
					endTime={pendingEmailVerification.liftCooldownAt}
					onSubmit={() => handleVerifyEmail()}
				>
					{$_('verification.email.resend-email')}
				</ResendEmailButton>
			{:else}
				<div class="flex gap-2 items-center text-success dark:brightness-75">
					<CircleWavyCheck size={32} weight="fill" />
					<span class="font-semibold">{$_('verification.email.email-verified')}</span>
				</div>
			{/if}
		</SettingsCard>
	</Formik>
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
