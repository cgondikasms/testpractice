import { test, expect } from "@playwright/test";
    test("herokuapp - Add/Remove Elements ", async ({ page }) => {
      await page.goto("https://the-internet.herokuapp.com/");
      await page.getByRole("link", { name: "Add/Remove Elements" }).click();
      let add1 = await page.getByRole("button", { name: "Add Element" });
      for (let i = 0; i < 5; i++) {
        await add1.click();
      }
      await page.pause();
      let delete1 = await page.locator(".added-manually").first();
      for (let i = 0; i < 3; i++) {
        await delete1.click();
      }
      await page.pause();
    });