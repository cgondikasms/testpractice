import { test, expect } from '@playwright/test';

test('ACME demo app', async ({ page }) => {
    await page.goto('https://demo.applitools.com/app.html');
    await expect(page).toHaveTitle('ACME demo app');
    await expect (page.locator('.logged-user-name')).toHaveText('Jack Gomez');
    const userRoleElement = await page.locator('.logged-user-role');
    await expect (page.locator('.logged-user-role')).toHaveText('Customer');
    const userRoleText = await userRoleElement.textContent();
    console.log('The User Role is: ' + userRoleText?.trim());

    const financialTitles: string[] = [];
    const financialValues: string[] = [];

    for (let i = 0; i < 3; i++) {
        const title = (await page.locator('.balance-title').nth(i).textContent())?.trim() || '';
        const value = (await page.locator('.balance-value').nth(i).textContent())?.trim() || '';

        financialTitles.push(title);
        financialValues.push(value);
    }

    console.log(financialTitles);
    console.log(financialValues);


  });