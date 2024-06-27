import { test, expect, Locator, Page } from "@playwright/test";
const dataset = JSON.parse(
  JSON.stringify(require("../utils/BuyingCourseTestData.json"))
);


test("ULTIMATE QA - Buying a Course", async ({ page }) => {
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
  await page.locator(".button-purchase").click();
  await page.locator("#input-2").fill(dataset[1].email);
  await page.locator("#input-3").fill(dataset[1].name);
  await page.locator("#input-4").fill(dataset[1].lastname);
  await page.locator(".DropdownToggle_container__3").click();
  await page.getByPlaceholder("Search").fill(dataset[1].country);
  await page.getByRole("button", { name: "Argentina" }).click();
  await page.pause();
});

//FORMS

test("ULTIMATE QA - Form1", async ({ page }) => {
  await page.goto("https://ultimateqa.com/filling-out-forms/");
  await page.locator("#et_pb_contact_name_1").fill(dataset[0].name);
  await page.locator("#et_pb_contact_message_1").fill(dataset[0].message);
  const numerosElement = await page.getByText("+").innerText();
  console.log(numerosElement);
  const numerosText = await numerosElement.toString();
  const numerosSeparados = numerosText.split("+");
  const numero1 = parseFloat(numerosSeparados[0].trim());
  const numero2 = parseFloat(numerosSeparados[1].trim());
  const suma = numero1 + numero2;
  console.log("La suma es:", suma);
  await page
    .locator('input[name="et_pb_contact_captcha_1"]')
    .fill(suma.toString());
  await page
    .locator("#et_pb_contact_form_1")
    .getByRole("button", { name: "Submit 9" })
    .click();
  await page.pause();
});

test("ULTIMATE QA - Form2", async ({ page }) => {
  const myFrame = page.frame({ name: "a-fb5axaso7ueu" });
  await page.goto(
    "https://forms.clickup.com/2314027/p/f/26ktb-6387/56LKNUZ9BDYXSC73SY/unlock-your-automation-potentialwitha-free-framework-assessment"
  );
  await page.locator("#cu-form-control-0").fill(dataset[1].name);
  await page.locator("#cu-form-control-1").fill(dataset[1].email);
  await page.locator("#cu-form-control-2").fill(dataset[1].role);
  await page.locator("#cu-form-control-3").fill(dataset[1].company);
  await page.locator('[data-test="select__dropdown__toggle"]').click();
  await page.getByText("Test automation optimization").click();
  await page.getByPlaceholder("Please include all").fill("all good");
  await page
    .frameLocator('iframe[title="reCAPTCHA"]')
    .getByLabel(`I'm not a robot`)
    .click();
  await page.pause();
});

//SPRINTS

test("ULTIMATE QA - Sprint1", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "Learn how to automate an" }).click();
  await page.locator("input[name=firstname]").fill(dataset[0].name);
  await page.locator("#submitForm").click();
  await page.pause();
});

test("ULTIMATE QA - Sprint2", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "Learn how to automate an" }).click();
  await page.getByRole("link", { name: "Go to the next sprint" }).click();
  await page.waitForSelector("input[name=lastname]");
  await page.locator("input[name=firstname]").fill(dataset[1].name);
  await page.locator("input[name=lastname]").fill(dataset[1].lastname);
  await page.locator("input[type=submit]").click();
  await page.pause();
});

test("ULTIMATE QA - Sprint3", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "Learn how to automate an" }).click();
  await page.getByRole("link", { name: "Go to the next sprint" }).click();
  await page.getByRole("link", { name: "Go to sprint 3" }).click();
  const isChecked = await page.getByRole("radio").nth(1);
  isChecked.click();
  await expect(isChecked).toBeChecked();
  await page.locator("input[name=firstname]").fill(dataset[1].name);
  await page.locator("input[name=lastname]").fill(dataset[1].lastname);
  await page.locator("input[type=submit]").click();
  await page.pause();
});

test("ULTIMATE QA - Sprint4", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "Learn how to automate an" }).click();
  await page.getByRole("link", { name: "Go to the next sprint" }).click();
  await page.getByRole("link", { name: "Go to sprint 3" }).click();
  await page.getByRole("link", { name: "Go to sprint 4" }).click();
  const isChecked1 = await page.locator("#radio1-f");
  isChecked1.click();
  await expect(isChecked1).toBeChecked();
  await page.locator("#f1").fill(dataset[0].name);
  await page.locator("#l1").fill(dataset[0].lastname);
  const button1 = await page.locator("#submit1");
  const isVisible = await button1.isVisible();
  if (isVisible) {
    console.log("El primer botón de enviar no será ejecutado, pero es visible");
  } else {
    console.log("El primer botón de enviar no es visible");
  }
  const isChecked2 = await page.locator("#radio2-0");
  isChecked2.click();
  await expect(isChecked2).toBeChecked();
  await page.locator("#f2").fill(dataset[2].name);
  await page.locator("#l2").fill(dataset[2].lastname);
  await page.locator("#submit2").click();
  await page.pause();
});

test("ULTIMATE QA - Sprint5", async ({ page }) => {
  await page.goto("https://ultimateqa.com/automation");
  await page.getByRole("link", { name: "Learn how to automate an" }).click();
  await page.getByRole("link", { name: "Go to the next sprint" }).click();
  await page.getByRole("link", { name: "Go to sprint 3" }).click();
  await page.getByRole("link", { name: "Go to sprint 4" }).click();
  await page.getByRole("link", { name: "Go to sprint 5" }).click();
  const isChecked1 = await page.locator("#radio1-f");
  isChecked1.click();
  await expect(isChecked1).toBeChecked();
  await page.locator("#f1").fill(dataset[1].name);
  await page.locator("#l1").fill(dataset[1].lastname);
  const isChecked2 = await page.locator("#radio2-0");
  isChecked2.click();
  await expect(isChecked2).toBeChecked();
  await page.locator("#f2").fill(dataset[2].name);
  await page.locator("#l2").fill(dataset[2].lastname);
  await page.locator("#submit2").click();
  const isChecked3 = await page.locator("input[name=gender]").nth(1);
  isChecked3.click();
  await expect(isChecked3).toBeChecked();
  await page.locator("input[value=Submit]").click();
  await page.pause();
});

//LOGIN AUTOMATION

/*Pending
test('test', async ({ page }) => {
  await page.goto('https://courses.ultimateqa.com/users/sign_up');
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.locator('#user[first_name]').fill("Cata");
  await page.locator('#user[last_name]').fill("Gdk");
  await page.locator('#user[email]').fill("catagondikas@gmail.com");
  await page.locator('#user[password]').fill("12345678");
  await page.locator('user[terms]').click();

  await page.pause()
});*/


//ELEMENTS FOR AUTOMATION

test("ULTIMATE QA - Automated Elements Extended Version", async ({ page }) => {
  let logCount = 0; // Variable para contar los console.log exitosos

  await page.goto("https://ultimateqa.com/simple-html-elements-for-automation/");
  await page.locator("#idExample").click(); // Click usando ID
  await expect(page).toHaveURL("https://ultimateqa.com/button-success");
  await expect(page.getByRole('heading', { name: 'Button success' })).toBeVisible();
  console.log("1- Se ha llegado a la primera página");
  logCount++;

  await page.goBack();
  await page.locator(".buttonClass").click(); // Click usando Class Name
  await expect(page).toHaveURL("https://ultimateqa.com/button-success?");
  console.log("2- Se ha llegado a la segunda página");
  logCount++;

  await page.goBack();
  await page.locator('button[name="button1"]').click(); // Click usando Name
  await expect(page).toHaveURL("https://ultimateqa.com/button-success/?button1=");
  console.log("3- Se ha llegado a la tercera página");
  logCount++;

  await page.goBack();
  await page.locator('a:has-text("Click me using this link text!")').click(); // Click usando link text
  await expect(page).toHaveURL("https://ultimateqa.com/link-success/");
  console.log("4- Se ha llegado a la cuarta página");
  logCount++;

  if (logCount === 4) {
    console.log("RESULTADO: todos los botones funcionan");
  }
  else {
    console.log("RESULTADO: algunos botones no funcionan");
  }

  await page.pause();
});
