import { test, expect } from '@playwright/test';
//Logo and heading checks
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('img', { name: 'company-branding' }).click();
  await page.locator('.orangehrm-login-branding').click();
  await page.getByRole('heading', { name: 'Login' }).click();
  await page.locator('label').filter({ hasText: 'Username' }).click();
  await page.locator('label').filter({ hasText: 'Password' }).click();
});