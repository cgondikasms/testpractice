import { Locator, Page } from "@playwright/test";
import datatool from "../utils/NaturaTestData.json";

export class CartPage {
  page: Page;
  cartProduct: Locator;
  productName: string;
  finalizarcompraButton: Locator;
  cart: Locator;
  cart2: Locator;
  vaciar: Locator;
  confirmar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartProduct = page.getByText("Bolsa Pequeña");
    this.productName = datatool[0].productName;
    this.finalizarcompraButton = page.getByTestId('open-delivery')
    this.cart = page.getByTestId('basket-badge')
    this.cart2 = page.getByTestId('open-cart')
    this.vaciar = page.getByRole('button', { name: 'Vaciar bolsa' });
    this.confirmar = page.getByRole('button', { name: 'Si' })
  }
  async verifyproduct() {
    if (this.cartProduct) {
      await this.cartProduct.waitFor();
      const text = await this.cartProduct.innerText();

      if (text.includes(this.productName)) {
        console.log("El producto agregado al carrito es: " + text);
        console.log("3rd Step: Cart - Exitoso");
      } else {
        console.error(
          "El producto encontrado en el carrito no coincide con el productName del JSON"
        );
      }
    }
    await this.gotoFinalizarCompra()
  }

  async gotoFinalizarCompra() {
    await this.finalizarcompraButton.click();
  }

  async clearCart() {
  await this.cart.click();
  await this.cart2.click();
  await this.vaciar.click();
  await this.confirmar.click();
}}
