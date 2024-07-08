import { Locator, Page } from "@playwright/test";

export class LoginPage {
  page: Page;
  LoginButton: Locator;
  email: Locator;
  password: Locator;
  submitButton: Locator;
  successfulLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.LoginButton = page.getByTestId("header-login-button");
    this.email = page.locator("#login-field");
    this.password = page.locator("#login-password");
    this.submitButton = page.getByTestId("login-button");
    this.successfulLogin = page.locator("//h6[text()='Hola Catalina!']");
  }

  async goTo(url: string) {
    await this.page.goto(url);
  }

  async login(email: string, password: string) {
    await this.LoginButton.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.acceptCookies();
    await this.submitButton.click();
    await this.verifyingLogin();
  }

  async verifyingLogin() {
    if (this.successfulLogin) {
      await this.successfulLogin.waitFor();
      const text = await this.successfulLogin.innerText();
      if (text.includes("Hola Catalina!")) {
        console.log("1rst Step: Login - Exitoso");
      } else {
        console.error("Login fallo");
      }
    }
  }

  async acceptCookies() {
    await this.page.waitForSelector(".ot-sdk-container");
    await this.page.click("#onetrust-accept-btn-handler");
  }
}
