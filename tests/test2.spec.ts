import { test, expect } from "@playwright/test";
const dataset = JSON.parse(
  JSON.stringify(require("../utils/BuyingCourseTestData.json"))
);

test("ULTIMATE QA - buying a course", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");

  await page.locator("#menu-item-218225").hover();
  await page
    .locator("#menu-main-menu")
    .getByRole("link", { name: "Free Courses" })
    .click();
  await page.locator('.pagination__page-number:text("2")').click();
  await page
    .locator('.card__name:text("Page Objects in Test Automation")')
    .click();
  await page.locator('.button-purchase').click();
  await page.locator('#input-2').fill(dataset[1].email);
  await page.locator('#input-3').fill(dataset[1].name)
  await page.locator('#input-4').fill(dataset[1].lastname)
  await page.locator('.DropdownToggle_container__3').click();
  await page.getByPlaceholder('Search').fill(dataset[1].country);
  await page.getByRole('button', { name: 'Argentina' }).click();
  await page.pause()
});

test("ULTIMATE QA - A", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
});

