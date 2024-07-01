import { test, expect } from '@playwright/test';

test("Mercado Libre", async ({ page }) => {
    await page.goto("https://demo.applitools.com/app.html");
});
