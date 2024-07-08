import { Locator, Page } from "@playwright/test";

export class OrdersReviewPage {
  page: Page;
  addnewadress: Locator;
  provinciamenu: Locator;
  localidadmenu: Locator;
  localidadselect: Locator;
  codigopostal: Locator;
  calle: Locator;
  numero: Locator;
  info: Locator;
  tipovivienda: Locator;
  recipient: Locator;
  telefono: Locator;
  definir: Locator;
  guardar: Locator;
  borrar: Locator;
  confirmar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addnewadress = page.getByRole("heading", {
      name: "Añadir nueva dirección",
    });
    this.provinciamenu = page.locator("#react-select-2-placeholder");
    this.localidadmenu = page.locator("#react-select-3-input");
    this.localidadselect = page.getByText("Capital (CORDOBA)", { exact: true });
    this.codigopostal = page.getByPlaceholder("B3643BAC");
    this.calle = page.getByPlaceholder("Ej: Avenida del Libertador");
    this.numero = page.locator('input[name="houseNumber"]');
    this.info = page.getByPlaceholder("Ej: Entrecalles u otras");
    this.tipovivienda = page.locator('input[name="addressNickname"]');
    this.recipient = page.locator('input[name="recipientName"]');
    this.telefono = page.locator('input[name="phoneNumber"]');
    this.definir = page.locator('#mainAddress')
    this.guardar = page.getByRole("button", { name: "Guardar modificaciones" });
    this.borrar = page.locator('a').filter({ hasText: 'CasaFlinders, 1323 Código' }).getByRole('button').nth(1)
    this.confirmar = page.getByRole("button", { name: "Borrar" });
  }

  async fillingData() {
    await this.addnewadress.click();
    await this.provinciamenu.click();
    await this.page.click('text="Córdoba"');
    await this.localidadmenu.click();
    await this.localidadselect.click();
    await this.codigopostal.fill("X5016");
    await this.calle.fill("Flinders");
    await this.numero.click()
    await this.numero.fill("1323");
    await this.info.fill("Entre Alumbrado y Botafogo");
    await this.tipovivienda.fill("Casa");
    await this.recipient.fill("Maria Alumbro");
    await this.telefono.fill("3512698736");
    await this.definir.check();
    await this.guardar.click();

    console.log("4rth Step: Orders Review Page - Exitoso");
  }

async clearAddress() {
  await this.borrar.click();
  await this.confirmar.click();
  }

}