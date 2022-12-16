import { test, expect } from '@playwright/test';
//Dashboard and wigdets checks
test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('heading', { name: 'Dashboard' }).click();
  await page.getByText('Time at WorkPunched OutPunched Out: Today at 06:10 PM (GMT 7)0h 8m TodayThis Wee').click();
  await page.getByText('Time at Work').click();
  await page.locator('.orangehrm-attendance-card-profile').click();
  await page.locator('.orangehrm-attendance-card-bar').click();
  await page.getByText('This WeekDec 12 - Dec 180h 8m').click();
  await page.locator('canvas').first().click({
    position: {
      x: 89,
      y: 7
    }
  });
  await page.locator('div:nth-child(2) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-icon').click();
  await page.locator('.orangehrm-todo-list-item').first().click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});