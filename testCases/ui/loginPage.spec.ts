import { test } from "@playwright/test";
import { ENV } from "globalVariables";
import { LoginPage } from "@support/pageObjects/loginPage";
import { onFileExtensionUtil } from "@support/utils/fileExtensionUtil";

test.describe("Login Page", () => {
    let onLoginPage: LoginPage;
    let dataTest: Record<string, any> = {};
    let expectedResult: Record<string, any> = {};

    test.beforeAll(async () => {
        expectedResult = await onFileExtensionUtil.readDataFromJson(`./resources/expectedResults/loginPage.json`);
        dataTest = await onFileExtensionUtil.readDataFromJson(`./resources/dataTest/loginPage.json`);
    });

    test.beforeEach(async ({ page }) => {
        onLoginPage = new LoginPage(page);
        await page.goto(String(ENV.ENV_URL_LOGIN));
        await onLoginPage.verifyLoginPage(expectedResult);
    });

    test("Verify user is able to login successfully", { tag: ["@high", "@regression", "@ui"] }, async () => {
        await onLoginPage.fillUsernameAndPassword(String(ENV.VALID_USERNAME), String(ENV.VALID_PASSWORD));
        await onLoginPage.clickLoginButton();
        await onLoginPage.verifyLoginSuccessfully(expectedResult);
        await onLoginPage.clickLogoutButton();
        await onLoginPage.verifyLoginPage(expectedResult);
    });

    test(
        "Verify user is unable to login when password is incorrect",
        { tag: ["@medium", "@regression", "@ui"] },
        async () => {
            await onLoginPage.fillUsernameAndPassword(String(ENV.VALID_USERNAME), dataTest.invalidPassword);
            await onLoginPage.clickLoginButton();
            await onLoginPage.verifyLoginFailed(expectedResult);
        }
    );

    test(
        "Verify user is unable to login when username not found",
        { tag: ["@medium", "@regression", "@ui"] },
        async () => {
            await onLoginPage.fillUsernameAndPassword(dataTest.usernameNotFound, String(ENV.VALID_PASSWORD));
            await onLoginPage.clickLoginButton();
            await onLoginPage.verifyLoginFailed(expectedResult, dataTest.usernameNotFound);
        }
    );
});
