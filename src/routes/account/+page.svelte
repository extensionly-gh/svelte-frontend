<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from './$types';
	import UpdateAccountForm from './_UpdateAccountForm.svelte';
	import VerifyEmailForm from './_VerifyEmailForm.svelte';

	export let data: PageData;

	const emailVerification = data.verifications?.find(
		(verification) => verification.type === 'VALIDATE_EMAIL'
	);
</script>

<div class="flex flex-col gap-6">
	<UpdateAccountForm initialValues={data.user} />
	{#if emailVerification}
		<VerifyEmailForm verification={emailVerification} />
	{/if}
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
