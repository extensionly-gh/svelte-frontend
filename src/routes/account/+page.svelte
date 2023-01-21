<script lang="ts">
	import { _ } from 'svelte-i18n';
	import SettingsCard from './_SettingsCard.svelte';
	import IconCircleWavyWarning from '~icons/ph/circle-wavy-warning-fill';
	import IconCircleWavyCheck from '~icons/ph/circle-wavy-check-fill';
	import { ButtonWithTimer } from '$lib/components/button';
	import { DateTime } from 'luxon';
	import type { PageData } from './$types';
	import UpdateAccountForm from './_UpdateAccountForm.svelte';

	export let data: PageData;

	let date = DateTime.now().toISO();

	const emailVerification = data.verifications?.find(
		(verification) => verification.type === 'VALIDATE_EMAIL'
	);

	function handleVerifyEmail() {
		console.log('handleVerifyEmail');
		date = DateTime.now().plus({ seconds: 5 }).toISO();
	}
</script>

<div class="flex flex-col gap-6">
	<UpdateAccountForm initialValues={data.user} />
	<form action="">
		<SettingsCard title={$_('r-acc.email.title')}>
			{#if !emailVerification?.isVerified}
				<div class="flex gap-2 items-center w-full text-error ">
					<IconCircleWavyWarning width="32px" height="32px" />
					<span class="font-semibold flex-grow">{$_('r-acc.email.not-yet-verified')}</span>
					<ButtonWithTimer
						variants={{ width: 'short' }}
						endTime={date}
						onSubmit={() => handleVerifyEmail()}
					>
						{$_('r-acc.email.resend-email')}
					</ButtonWithTimer>
				</div>
			{:else}
				<div class="flex gap-2 items-center w-full text-success dark:brightness-75">
					<IconCircleWavyCheck width="32px" height="32px" />
					<span class="font-semibold">{$_('r-acc.email.email-verified')}</span>
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
		<SettingsCard info={$_('r-acc.avatar.info')} title={$_('r-acc.avatar.title')}>
			<p>{$_('r-acc.avatar.description')}</p>
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
        description={$_('r-acc.delete.dialog.description')}
        title={$_('r-acc.delete.dialog.title')}
        trigger={
          <Button data-testid="delete-account-dialog-trigger" intent="danger" size="sm">
            {$_('r-acc.delete.dialog.trigger')}
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
                {$_('r-acc.delete.dialog.confirm')}
              </Button>
            </Form>
          )}
        </Formik>
      </Dialog>
    }
    info={$_('r-acc.delete.info')}
    intent="danger"
    title={$_('r-acc.delete.title')}
  >
    <p>{$_('r-acc.delete.description')}</p>
  </SettingsCard> -->
</div>
