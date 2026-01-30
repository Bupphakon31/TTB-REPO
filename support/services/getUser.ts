import { expect } from "@playwright/test";
import { onHTTPRequest } from "../../plugins/httpRequest";
import { ENV } from "../../globalVariables";

class GetUser {
    public async callGetUser(path: string, headers: Record<string, any> = {}) {
        const options: Record<string, any> = {
            headers: headers,
        };

        const contextHTTP = await onHTTPRequest.createContextHTTPRequest({ baseURL: String(ENV.ENV_URL) });
        let response: Record<string, any> = await contextHTTP.get(path, options);
        response = {
            statusCode: response.status(),
            statusText: response.statusText(),
            body: await response.json(),
        };

        await contextHTTP.dispose();
        return response;
    }

    public async verifyGetUserResponse(response: Record<string, any>, expectedResults: Record<string, any>) {
        expect(response.statusCode).toBe(200);
        expect(response.body.data.id).toEqual(expectedResults.id);
        expect(response.body.data.email).toEqual(expectedResults.email);
        expect(response.body.data.first_name).toEqual(expectedResults.first_name);
        expect(response.body.data.last_name).toEqual(expectedResults.last_name);
        expect(response.body.data.avatar).toEqual(expectedResults.avatar);
    }
}

export const onGetUser: GetUser = new GetUser();
