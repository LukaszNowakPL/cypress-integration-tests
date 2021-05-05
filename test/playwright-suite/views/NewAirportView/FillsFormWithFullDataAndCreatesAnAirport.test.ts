/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import {expect} from '@jest/globals';
import {getDocument, queries, waitFor, within} from 'playwright-testing-library';
import {
    interceptCountries,
    interceptCountry,
    interceptCountryAirports,
    interceptPostAirport,
} from '../../_helpers/interceptors/countriesApi';
import {interceptAirlines} from '../../_helpers/interceptors/airlinesApi';
import {airlinesDtoMock} from '../../_helpers/mocks/airlinesApi.mocks';
import {airportsDtoMock, countriesDtoMock, countryDtoMock, postAirportFormDataMock} from '../../_helpers/mocks/countriesApi.mocks';

test('fills form with full data and creates an airport', async () => {
    jest.setTimeout(25000);

    await interceptCountries(countriesDtoMock);
    await interceptAirlines(airlinesDtoMock);
    await interceptPostAirport(1, postAirportFormDataMock);
    await interceptCountry(1, countryDtoMock);
    await interceptCountryAirports(1, airportsDtoMock);

    await page.goto('http://localhost:3000/airports/add');

    const {getByRole, findByText, getByTestId} = queries;
    const $document = await getDocument(page);

    const $countryArea = await getByTestId($document, 'country-area');
    const $airlinesArea = await getByTestId($document, 'airlines-area');

    // Wait for data being fetched
    const $countrySelector = await getByRole($countryArea, 'combobox', {name: /country/i});
    await $countrySelector.click();
    await findByText($countryArea, 'Test country name');
    await findByText($airlinesArea, 'Test airline name');

    // Fill form
    await page.selectOption('text="Country"', {label: 'Test country name'});
    await page.fill('text="City served"', 'Test city name');
    await page.fill('text="IATA code"', 'AAA');
    await page.fill('text="Pax amount / year"', '1000000');

    await page.check('text="Test airline name"');
    await page.press('text="Average delay (in % of a flight time)"', 'Backspace');
    await page.fill('text="Average delay (in % of a flight time)"', '10');
    await page.check('text="CATI - both sides"');
    await page.check('text="Fast track"');
    await page.check('text="Boarding kiosks"');
    await page.check('text="Public transportation"');
    await page.check('text="Observation desk"');
    await page.check('text="Shower services"');
    await page.check('text="Airport hotel"');
    await page.fill('text="Additional notes"', 'Additional test note');

    expect(await page.isEnabled('text="Send"')).toBeTruthy();
    await page.click('text="Send"');

    // Checks fields and button are disabled during sending
    expect(await page.isDisabled('text="Country"')).toBeTruthy();
    expect(await page.isDisabled('text="City served"')).toBeTruthy();
    expect(await page.isDisabled('text="IATA code"')).toBeTruthy();
    expect(await page.isDisabled('text="Pax amount / year"')).toBeTruthy();

    expect(await page.isDisabled('text="Test airline name"')).toBeTruthy();
    expect(await page.isDisabled('text="Average delay (in % of a flight time)"')).toBeTruthy();
    expect(await page.isDisabled('text="Average delay (in % of a flight time)"')).toBeTruthy();
    expect(await page.isDisabled('text="CATI - both sides"')).toBeTruthy();
    expect(await page.isDisabled('text="Fast track"')).toBeTruthy();
    expect(await page.isDisabled('text="Boarding kiosks"')).toBeTruthy();
    expect(await page.isDisabled('text="Public transportation"')).toBeTruthy();
    expect(await page.isDisabled('text="Observation desk"')).toBeTruthy();
    expect(await page.isDisabled('text="Shower services"')).toBeTruthy();
    expect(await page.isDisabled('text="Airport hotel"')).toBeTruthy();
    expect(await page.isDisabled('text="Additional notes"')).toBeTruthy();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();
    await page.waitForRequest('**/api/countries/1/airports');

    // Some confirmation message should appear nevertheless usage of toast() breaks tests

    expect(page.url()).toBe('http://localhost:3000/countries/1/airports');
});
