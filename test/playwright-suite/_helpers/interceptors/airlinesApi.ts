import {AirlinesResponse} from "../../../../src/api/airlinesApi/airlinesApi.types";

export const interceptAirlines = async (response: AirlinesResponse) => {
    await page.route('**/api/airlines', async (route, request) => {
        if(request.method() === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(response)
            })
        }
    })
};