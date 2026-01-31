import { type Page } from "@playwright/test";

export class LoginLocator {
    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    get loginHeader() {
        return this.page.getByText("Login Page");
    }
    get loginDescription() {
        return this.page.locator('//*[@id="content"]/div/h4');
    }
    get usernameLabel() {
        return this.page.locator('//*[@id="login"]/div[1]/div/label');
    }
    get usernameField() {
        return this.page.getByTestId("username");
    }
    get passwordLabel() {
        return this.page.locator('//*[@id="login"]/div[2]/div/label');
    }
    get passwordField() {
        return this.page.getByTestId("password");
    }
    get loginButton() {
        return this.page.locator('//*[@id="login"]/button/i');
    }
    get alertMsg() {
        return this.page.locator('//*[@id="flash"]');
    }
    get loginHeaderSuccess() {
        return this.page.locator('//*[@id="content"]/div/h2');
    }
    get loginDescriptionSuccess() {
        return this.page.locator('//*[@id="content"]/div/h4');
    }
    get logoutButton() {
        return this.page.locator('//*[@id="content"]/div/a');
    }
}
