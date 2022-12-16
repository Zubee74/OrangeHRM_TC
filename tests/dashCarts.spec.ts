import { test, expect } from '@playwright/test';
//Dashboard cart check
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByText('Time at WorkPunched OutPunched Out: Sep 30th at 05:00 PM (GMT 5.5)0h 0m TodayThi').click();
  await page.getByText('Time at Work').click();
  await page.getByRole('img', { name: 'profile picture' }).nth(1).click();
  await page.getByText('Punched Out').first().click();
  await page.getByText('Punched Out: Sep 30th at 05:00 PM (GMT 5.5)').click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await page.locator('canvas').first().click({
    position: {
      x: 33,
      y: 61
    }
  });
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});