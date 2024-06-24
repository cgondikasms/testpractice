import { test, expect } from "@playwright/test";

test("ULTIMATE QA", async ({ page }) => {
    await page.goto("https://ultimateqa.com/automation");
    page.on('popup', async popup => {
        await popup.close(); 
      });
        //await page.locator('.web3-modal-close').click();
        await page.locator('#menu-item-218225').hover();
        await page.locator('#menu-main-menu').getByRole('link', { name: 'Free Courses' }).click();
        await page.locator('.pagination__page-number:text("2")').click();
        await page.locator('.card__name:text("Page Objects in Test Automation")').click();
        //await page.getByRole('link', { name: 'Buy $' }).click();*/
        await page.pause()
      });