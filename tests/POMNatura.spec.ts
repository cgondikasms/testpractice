import { test, expect, BrowserContext, Page } from "@playwright/test";
import { LoginPage } from "../pageobjects/LoginPage";
import { DashboardPage } from "../pageobjects/DashboardPage";
import { CartPage } from "../pageobjects/CartPage";
import { OrdersReviewPage } from "../pageobjects/OrdersReviewPage";
import datatool from "../utils/NaturaTestData.json";

const naturaURL = "https://www.naturacosmeticos.com.ar/";
test.describe.configure({ mode: "serial" });
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});
test("Natura test", async ({}) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);
  const cartPage = new CartPage(page);
  const ordersReviewPage = new OrdersReviewPage(page);

  await loginPage.goTo(naturaURL);
  await loginPage.login(datatool[0].email, datatool[0].password);

  await dashboardPage.searchproduct();

  await cartPage.verifyproduct();

  await ordersReviewPage.fillingData();

  await page.pause();
});
test.afterAll("Clear Data", async ({ }) => {
  const loginPage = new LoginPage(page);
  const cartPage = new CartPage(page);
  const ordersReviewPage = new OrdersReviewPage(page);
  await ordersReviewPage.clearAddress();
  await loginPage.goTo(naturaURL);
  await cartPage.clearCart();
  console.log("Done");
  await page.pause();
});
