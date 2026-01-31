import { ENV } from "@/globalVariables";
import { test } from "@playwright/test";
import { onCommonFunctions } from "@support/services/common";
import { onFileExtensionUtil } from "@support/utils/fileExtensionUtil";
import { onGetUser } from "@support/services/getUser";

test.describe("Get User By Id", () => {
    let response: Record<string, any> = {};
    let headers: Record<string, any> = {};
    let dataTest: Record<string, any> = {};
    let expectedCommon: Record<string, any> = {};
    let expectedResult: Record<string, any> = {};
    let httpStatusCodeFailed: Record<string, any> = {};

    test.beforeAll(async () => {
        dataTest = await onFileExtensionUtil.readDataFromJson(`./resources/dataTest/getUser.json`);
        expectedResult = await onFileExtensionUtil.readDataFromJson(`./resources/expectedResults/getUser.json`)
            .apiRespMsg.successResp;
        expectedCommon = await onFileExtensionUtil.readDataFromJson(`./resources/expectedResults/common.json`);
        headers = (await onFileExtensionUtil.readDataFromJson(`./resources/dataTest/common.json`)).header.apiKey;
        httpStatusCodeFailed = expectedCommon.httpStatus;
    });

    test(
        "GET: [/api/users] response [failed] when get user profile but user not found",
        { tag: ["@medium", "@regression", "@api"] },
        async () => {
            await test.step("Call Get User API with user id not exist", async () => {
                response = await onGetUser.callGetUser(`${String(ENV.V1_USER)}/${dataTest.notFoundUserId}`, headers);
            });

            await test.step("Verify Get Profile API response", async () => {
                await onCommonFunctions.compareRespMsgWithExpectedFile(
                    response.statusCode,
                    httpStatusCodeFailed.failedCode.notFound,
                    response,
                    {}
                );
            });
        }
    );

    test(
        "GET: [/api/users] response [success] when get user profile success",
        { tag: ["@medium", "@regression", "@api"] },
        async () => {
            await test.step("Call Get User API with user id is exist", async () => {
                response = await onGetUser.callGetUser(`${String(ENV.V1_USER)}/${dataTest.validUserId}`, headers);
            });

            await test.step("Verify Get Profile API response", async () => {
                await onGetUser.verifyGetUserResponse(response, expectedResult);
            });
        }
    );
});
