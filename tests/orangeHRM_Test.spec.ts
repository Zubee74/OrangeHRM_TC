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
//Login page checks
test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Mr. EnnSunni' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });

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

//Admin panel check
test('test', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'ESS' }).getByText('ESS').click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('Zubair');
    await page.locator('form i').nth(1).click();
    await page.getByPlaceholder('Type for hints...').click();
    /*await page.getByPlaceholder('Type for hints...').fill('ZubairMj');
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('Zubair');
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('Mohd.Zubair');
    await page.getByPlaceholder('Type for hints...').click();*/
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Disabled' }).click();
    await page.locator('form i').nth(1).click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('textbox').nth(2).click();
    await page.getByRole('textbox').nth(2).fill('zubee74');
    //await page.getByRole('textbox').nth(3).click();
    await page.getByRole('textbox').nth(3).fill('War@9876');
    await page.getByRole('textbox').nth(4).click();
    await page.getByRole('textbox').nth(4).fill('War@9876');
    await page.getByRole('button', { name: 'Save' }).click();
    /*await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('xxxxxR');
    await page.getByRole('button', { name: 'Save' }).click();*/
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('Zub');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await page.getByRole('textbox').nth(1).click();
    await page.getByRole('textbox').nth(1).fill('Abinaya');
    await page.locator('form i').first().click();
    await page.getByRole('option', { name: 'ESS' }).click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('Abinaya Ragupathi');
    await page.getByRole('option', { name: 'Abinaya Ragupathi Lakshmanachari' }).getByText('Abinaya Ragupathi Lakshmanachari').click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('link', { name: 'Dashboard' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Meghana Ganganajaiah' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  });