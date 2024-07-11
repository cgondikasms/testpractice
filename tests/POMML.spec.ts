import { test, expect, BrowserContext, Page } from "@playwright/test";
import { DashboardPageML } from "../pageobjectsML/DashboardPageML";
import datatool from "../utils/MLTestData.json";

let page: Page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
test("ML test", async ({}) => {
  const dashboardPageML = new DashboardPageML(page);
  await dashboardPageML.searchProduct();
  await dashboardPageML.filterProduct();
  await dashboardPageML.selectProduct();
});
