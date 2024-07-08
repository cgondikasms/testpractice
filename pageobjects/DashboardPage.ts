import { Locator, Page } from "@playwright/test";

export class DashboardPage {
  page: Page;
  category: Locator;
  product: Locator;
  comprarButton: Locator;
  carritoButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.category = page.getByText("Productos veganos");
    this.product = page.getByText("Bolsa Pequeña");
    this.comprarButton = page.getByText("Comprar");
    this.carritoButton = page.getByTestId('open-cart');
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }
  async searchproduct() {
    await this.category.click();
    await this.product.click();
    await this.comprarButton.click();
    await this.navigateToCart();
    

    console.log("2nd Step: Dashboard - Exitoso");
  }

  async navigateToCart()
{
    await this.carritoButton.click();
}
 
}
