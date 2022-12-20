import { test, expect } from '@playwright/test';
//Login page checks
test('test', async ({ page }) => {
    const newLocal = 'https://www.google.com';
  await page.goto(newLocal);
});