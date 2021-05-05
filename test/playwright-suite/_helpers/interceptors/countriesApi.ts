import {AirportForm, AirportsResponse, CountriesResponse, CountryResponse} from "../../../../src/api/countriesApi/countriesApi.types";
import {isBodySame} from "./_reqBodyHelpers";

export const interceptCountries = async (response: CountriesResponse) => {
    await page.route('**/api/countries', async (route, request) => {
        if(request.method() === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(response)
            })
        }
    })
};

export const interceptCountry = async (countryId: number, response: CountryResponse) => {
    await page.route(`**/api/countries/${countryId}`, async (route, request) => {
        if(request.method() === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(response)
            })
        }
    })
};

export const interceptCountryAirports = async (countryId: number, response: AirportsResponse) => {
    await page.route(`**/api/countries/${countryId}/airports`, async (route, request) => {
        if(request.method() === 'GET') {
            await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify(response)
            })
        }
    })
};

export const interceptPostAirport = async (countryId: number, formData: AirportForm) => {
    await page.route(`**/api/countries/${countryId}/airports`, async (route, request) => {
        if(request.method() === 'POST' && isBodySame(formData, request)) {
            setTimeout(async () => await route.fulfill({
                status: 200,
                contentType: 'application/json',
                body: JSON.stringify({})
            }), 300);
        }
    })
};