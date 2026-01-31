import { test } from "@playwright/test";

export { LoginLocator } from "@support/locators/loginLocator";

export { LoginPage } from "@support/pageObjects/loginPage";

export function step(stepName?: string | ((...args: any[]) => string)) {
    return function decorator(target: Function, context: ClassMemberDecoratorContext) {
        return function replacementMethod(this: any, ...arg: any) {
            let name: string;

            if (typeof stepName === "function") {
                name = `${stepName(...arg)}`;
            } else {
                name = `${stepName || (context.name as string)} (${this.constructor.name})`;
            }
            return test.step(name, async () => {
                return await target.call(this, ...arg);
            });
        };
    };
}
