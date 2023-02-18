import test, { expect } from '@playwright/test';

test('update password', async ({ page }) => {
	await page.goto('/account', { waitUntil: 'networkidle' });
	await page.getByTestId('currentPwd-input').fill('StrongPassword1.');
	await page.getByTestId('newPwd-input').fill('#1Abcdef');
	await page.getByTestId('confirmPwd-input').fill('#1Abcdef');
	await page.getByTestId('updatepw-submit-button').click();

	await expect(page.getByTestId('toast-body')).toHaveText('Password updated successfully!');
	await page.getByRole('button', { name: '✕' }).click();

	// Revert
	await page.getByTestId('currentPwd-input').fill('#1Abcdef');
	await page.getByTestId('newPwd-input').fill('StrongPassword1.');
	await page.getByTestId('confirmPwd-input').fill('StrongPassword1.');
	await page.getByTestId('updatepw-submit-button').click();
	await expect(page.getByTestId('toast-body')).toHaveText('Password updated successfully!');
	await page.getByRole('button', { name: '✕' }).click();
});
