import { test, expect, Locator, Page } from "@playwright/test";
const scenarios = require('../utils/scenarios.json');

test("ULTIMATE QA - Automated Elements", async ({ page }) => {
  let allPassed = true;

  for (const scenario of scenarios) {
    await page.goto("https://ultimateqa.com/simple-html-elements-for-automation/");
    await page.locator(scenario.selector).click();

    try {
      if (scenario.expectedHeading) {
        await expect(page).toHaveURL(scenario.url);
        await expect(page.getByRole('heading', { name: scenario.expectedHeading })).toBeVisible();
      } else {
        await expect(page).toHaveURL(scenario.url);
      }

      console.log(scenario.message);
    } catch (error) {
      console.error(`Assertion fallida para: ${scenario.message}`);
      allPassed = false; 
    }
  }

  if (allPassed) {
    console.log("RESULTADO: todos los botones funcionan");
  } else {
    console.log("RESULTADO: no todos los botones funcionan");
  }

  await page.pause();
});
  

