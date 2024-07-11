import { Locator, Page } from "@playwright/test";
import datatool from "../utils/MLTestData.json";

export class DashboardPageML {
  page: Page;
  searchinput: Locator;
  searchbutton: Locator;
  filtro: Locator;
  product: Locator;
  prodcheck: Locator;
  URL: string;

  constructor(page: Page) {
    this.page = page;
    this.searchinput = page.locator("#cb1-edit");
    this.searchbutton = page.locator(".nav-search-btn");
    this.filtro = page.locator("span.ui-search-filter-name");
    this.product = page.getByRole("link", {
      name: "Colchon Espuma Firme Inducol",
    });
    this.prodcheck = page.locator(".ui-pdp-title");
    this.URL = "https://www.mercadolibre.com.ar/";
  }

  async searchProduct() {
    await this.page.goto(this.URL)
    await this.searchinput.fill(datatool[0].producto);
    await this.searchbutton.click();
  }

  async filterProduct() {
    const textotamano = await this.filtro.nth(5).textContent();
    if (textotamano === datatool[0].tamano) {
      console.log("El texto del tamano coincide con", datatool[0].tamano);
    } else {
      console.log("El texto del tamano NO coincide con", datatool[0].tamano);
    }
    await this.filtro.nth(5).click();
    const textomarca = await this.filtro.nth(3).textContent();
    if (textomarca === datatool[0].marca) {
      console.log("El texto de la marca coincide con", datatool[0].marca);
    } else {
      console.log("El texto de la marca NO coincide con", datatool[0].marca);
    }
    await this.filtro.nth(3).click();
    const textorelleno = await this.filtro.nth(2).textContent();
    if (textorelleno === datatool[0].relleno) {
      console.log("El texto del relleno coincide con", datatool[0].relleno);
    } else {
      console.log("El texto del relleno NO coincide con", datatool[0].relleno);
    }
    await this.filtro.nth(2).click();
  }
  async selectProduct() {
    await this.product.click();
    await this.prodcheck.innerText();
    console.log(
      "El producto seleccionado es:",
      await this.prodcheck.innerText()
    );
  }
}
