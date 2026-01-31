import { type Page, expect } from "@playwright/test";
import { LoginLocator } from "@support/locators/loginLocator";
import { step } from "@index";

export class LoginPage {
    readonly locators: LoginLocator;

    constructor(page: Page) {
        this.locators = new LoginLocator(page);
    }

    @step("Fill username and password field")
    async fillUsernameAndPassword(username: string, password: string) {
        await this.locators.usernameField.fill(username);
        await this.locators.passwordField.fill(password);
        await expect(this.locators.usernameField).toHaveValue(username);
        await expect(this.locators.passwordField).toHaveValue(password);
    }

    @step("Click login button")
    async clickLoginButton() {
        await this.locators.loginButton.click();
    }

    @step("Click logout button")
    async clickLogoutButton() {
        await this.locators.logoutButton.click();
    }

    @step("Verify login page")
    async verifyLoginPage(expected: Record<string, any>) {
        if (await this.locators.alertMsg.isVisible()) {
            (expect(this.locators.loginHeader).toBeVisible(),
                expect(this.locators.loginDescription).toBeVisible(),
                expect(this.locators.usernameLabel).toBeVisible(),
                expect(this.locators.usernameField).toBeVisible(),
                expect(this.locators.passwordLabel).toBeVisible(),
                expect(this.locators.passwordField).toBeVisible(),
                expect(this.locators.loginButton).toBeVisible(),
                expect(this.locators.alertMsg).toContainText(expected.logoutSuccess.successMessage),
                expect(this.locators.loginHeader).toHaveText(expected.loginPage.loginHeader),
                expect(this.locators.loginDescription).toContainText(expected.loginDescription),
                expect(this.locators.usernameLabel).toHaveText(expected.loginPage.usernameLabel),
                expect(this.locators.passwordLabel).toHaveText(expected.loginPage.passwordLabel),
                expect(this.locators.loginButton).toHaveText(expected.loginPage.loginButton));
        } else {
            await Promise.all([
                expect(this.locators.loginHeader).toBeVisible(),
                expect(this.locators.loginDescription).toBeVisible(),
                expect(this.locators.usernameLabel).toBeVisible(),
                expect(this.locators.usernameField).toBeVisible(),
                expect(this.locators.passwordLabel).toBeVisible(),
                expect(this.locators.passwordField).toBeVisible(),
                expect(this.locators.loginButton).toBeVisible(),
                expect(this.locators.loginHeader).toHaveText(expected.loginPage.loginHeader),
                expect(this.locators.loginDescription).toContainText(expected.loginDescription),
                expect(this.locators.usernameLabel).toHaveText(expected.loginPage.usernameLabel),
                expect(this.locators.passwordLabel).toHaveText(expected.loginPage.passwordLabel),
                expect(this.locators.loginButton).toHaveText(expected.loginPage.loginButton),
            ]);
        }
    }

    @step("Verify login successfully")
    async verifyLoginSuccessfully(expected: Record<string, any>) {
        await Promise.all([
            expect(this.locators.alertMsg).toBeVisible(),
            expect(this.locators.loginHeaderSuccess).toBeVisible(),
            expect(this.locators.loginDescriptionSuccess).toBeVisible(),
            expect(this.locators.logoutButton).toBeVisible(),

            expect(this.locators.alertMsg).toContainText(expected.loginPageSuccess.successMessage),
            expect(this.locators.loginHeaderSuccess).toHaveText(expected.loginPageSuccess.loginHeaderSuccess),
            expect(this.locators.loginDescriptionSuccess).toHaveText(expected.loginPageSuccess.loginDescriptionSuccess),
            expect(this.locators.logoutButton).toHaveText(expected.loginPageSuccess.logoutButton),
        ]);
    }

    @step("Verify login failed")
    async verifyLoginFailed(expected: Record<string, any>, username?: string) {
        if (username != undefined) {
            await Promise.all([
                expect(this.locators.alertMsg).toBeVisible(),
                expect(this.locators.loginHeader).toBeVisible(),
                expect(this.locators.loginDescription).toBeVisible(),
                expect(this.locators.usernameLabel).toBeVisible(),
                expect(this.locators.usernameField).toBeVisible(),
                expect(this.locators.passwordLabel).toBeVisible(),
                expect(this.locators.passwordField).toBeVisible(),
                expect(this.locators.loginButton).toBeVisible(),

                expect(this.locators.alertMsg).toContainText(expected.loginFailed.errorUsernameNotFoundMessage),
                expect(this.locators.loginHeader).toHaveText(expected.loginPage.loginHeader),
                expect(this.locators.loginDescription).toContainText(expected.loginDescription),
                expect(this.locators.usernameLabel).toHaveText(expected.loginPage.usernameLabel),
                expect(this.locators.passwordLabel).toHaveText(expected.loginPage.passwordLabel),
                expect(this.locators.loginButton).toHaveText(expected.loginPage.loginButton),
            ]);
        } else {
            await Promise.all([
                expect(this.locators.alertMsg).toBeVisible(),
                expect(this.locators.loginHeader).toBeVisible(),
                expect(this.locators.loginDescription).toBeVisible(),
                expect(this.locators.usernameLabel).toBeVisible(),
                expect(this.locators.usernameField).toBeVisible(),
                expect(this.locators.passwordLabel).toBeVisible(),
                expect(this.locators.passwordField).toBeVisible(),
                expect(this.locators.loginButton).toBeVisible(),

                expect(this.locators.alertMsg).toContainText(expected.loginFailed.errorPasswordMessage),
                expect(this.locators.loginHeader).toHaveText(expected.loginPage.loginHeader),
                expect(this.locators.loginDescription).toContainText(expected.loginDescription),
                expect(this.locators.usernameLabel).toHaveText(expected.loginPage.usernameLabel),
                expect(this.locators.passwordLabel).toHaveText(expected.loginPage.passwordLabel),
                expect(this.locators.loginButton).toHaveText(expected.loginPage.loginButton),
            ]);
        }
    }
}
