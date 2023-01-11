import { test, expect } from '@playwright/test';
class GoogleForm {
    constructor(page) {
        this.page = page;
        url = this.url.page.goto('https://www.google.com/');
        txt = this.txt.page.getByRole('img', { name: 'Google' });
        txtbox = this.txtbox.page.getByRole('combobox', { name: 'Search' });
        btn = this.btn.page.getByRole('button', { name: 'Google Search' });
    }

    async funPut() {
        await this.txt.click();
        await this.txtbox.fill("SRK");
        await this.btn.click();
    }
}


// test('test', async ({ page }) => {
//     await page.goto('https://www.google.com/');
//     await page.getByRole('img', { name: 'Google' }).click();
//     await page.getByRole('combobox', { name: 'Search' }).click();
//     await page.getByRole('combobox', { name: 'Search' }).click();
//     await page.getByRole('combobox', { name: 'Search' }).fill('abc');
//     await page.getByRole('combobox', { name: 'Search' }).click();
//     await page.locator('.sbic').first().click();
//     await page.getByRole('button', { name: 'Google Search' }).click();
// });