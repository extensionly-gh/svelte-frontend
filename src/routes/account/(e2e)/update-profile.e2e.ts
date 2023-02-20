import test, { expect } from '@playwright/test';

test.describe('update', () => {
	test('profile', async ({ page }) => {
		await page.goto('/account', { waitUntil: 'networkidle' });
		await page.getByTestId('name-input').fill('Edited User');
		// TODO: Update email, add checks e.g. email already in use by another user. Also, resend verification email.
		// TODO: Update phone number, add checks e.g. phone number already in use by another user. Also, resend verification SMS.
		await page
			.getByTestId('image-input')
			.fill('https://avatars.githubusercontent.com/u/47724710?v=4');

		await page.getByTestId('update-details-submit-button').click();

		await expect(page.getByTestId('toast-body')).toHaveText('Details updated successfully!');

		// Relogin to see changes
		await page.getByTestId('menu-trigger-user-menu').click();
		await page.getByTestId('menu-item-signout').click();
		await page.getByTestId('nav-signin-btn').click();
		await page.getByTestId('signin-email-input').fill('extensionly-user-dev@mailinator.com');
		await page.getByTestId('signin-password-input').fill('StrongPassword1.');
		await page.getByTestId('signin-submit-button').click();

		await expect(page.getByTestId('menu-trigger-user-menu')).toHaveText('Edited User');
		await expect(page.getByTestId('user-avatar')).toHaveAttribute(
			'src',
			'https://avatars.githubusercontent.com/u/47724710?v=4'
		);
	});
});
