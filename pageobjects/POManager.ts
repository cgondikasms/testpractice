import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

export class POManager {
     loginPage: LoginPage;

    constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }
}
