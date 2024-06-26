import { test, expect } from "@playwright/test";

test("ACME demo app", async ({ page }) => {
  await page.goto("https://demo.applitools.com/app.html");

  //assertions
  const userName = await page.locator(".logged-user-name").textContent();
  await expect(page).toHaveTitle("ACME demo app");
  await expect(page.locator(".logged-user-name")).toHaveText("Jack Gomez");
  console.log("El nombre del Usuario es: " + userName?.trim());

  //user role
  const userRoleElement = await page.locator(".logged-user-role");
  await expect(page.locator(".logged-user-role")).toHaveText("Customer");
  const userRoleText = await userRoleElement.textContent();
  console.log("El rol del Usuario es: " + userRoleText?.trim());

  //financial overview
  const balances: { [type: string]: string } = {};

  for (let i = 0; i < 3; ++i) {
    const title =
      (await page.locator(".balance-title").nth(i).textContent())?.trim() || "";
    const value =
      (await page.locator(".balance-value").nth(i).textContent())?.trim() || "";

    balances[title] = value;
  }

  console.log(`Total Balance: ${balances["Total Balance"]}`);
  console.log(`Credit Available: ${balances["Credit Available"]}`);
  console.log(`Due Today: ${balances["Due Today"]}`);

  //recent transactions (check)
  let items = await page.locator(".cell-with-media"); // trabaja con la columna de description
  let itemName = "Ebay Marketplace";
  let count = await items.count();

  for (let i = 0; i < count; ++i) {
    const itemElement = items.nth(i);
    const itemText = await itemElement.textContent();

    if (itemText?.trim() === itemName) {
      console.log(
        `La lista contiene ${count} elementos. Se encontró el elemento '${itemName}' dentro de la lista, en la posición ${i}.`
      );
    }
  }

  //recent transactions (status)
  const row = await page.getByRole("row");
  const rowCount = await row.count();
  let completeCount = 0;
  let pendingCount = 0;
  let declinedCount = 0;
  let exist = false;
  for (let i = 0; i < rowCount; i++) {
    let cellText = await row.nth(i).locator(".nowrap").locator("span").nth(1); // nowrap trabajando sobre la columna de estados
    let descriptionCell = await row
      .nth(i)
      .locator(".cell-with-media")
      .locator("span");
    if ((await cellText.allInnerTexts()).toString() === "Pending") {
      pendingCount++;
      exist = true;
      //console.log(await descriptionCell.allInnerTexts());
    }
    if ((await cellText.allInnerTexts()).toString() === "Complete") {
      completeCount++;
      exist = true;
      //console.log(await descriptionCell.allInnerTexts());
    }
    if ((await cellText.allInnerTexts()).toString() === "Declined") {
      declinedCount++;
      exist = true;
      //console.log(await descriptionCell.allInnerTexts());
    }
  }
  console.log(
    "Hay " +
      completeCount +
      " elementos en estado 'Complete' , " +
      pendingCount +
      " elementos en estado 'Pending' y " + declinedCount + " elemento en estado 'Declined'"
  );
  expect(exist, "no existen valores").toBe(true);
});
