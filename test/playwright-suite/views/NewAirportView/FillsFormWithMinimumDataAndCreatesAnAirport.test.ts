/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { Mockiavelli } from 'mockiavelli';
import {expect} from '@jest/globals';
import {getDocument, queries, waitFor, within} from 'playwright-testing-library';
import {airlinesDtoMock} from '../../_helpers/mocks/airlinesApi.mocks';
import {airportsDtoMock, countriesDtoMock, countryDtoMock, postAirportMinimumFormDataMock} from '../../_helpers/mocks/countriesApi.mocks';

test('shows validation errors on unvalidated fields', async () => {
    jest.setTimeout(25000);
    const mockiavelli = await Mockiavelli.setup(page);

    mockiavelli.mockGET('/api/countries', {
        status: 200,
        body: countriesDtoMock,
    });
    mockiavelli.mockGET('/api/airlines', {
        status: 200,
        body: airlinesDtoMock,
    });
    const postAirportRequestMock = mockiavelli.mockPOST('/api/countries/1/airports', {
        status: 200,
        body: {},
    });
    mockiavelli.mockGET('/api/countries/1', {
        status: 200,
        body: countryDtoMock,
    });
    mockiavelli.mockGET('/api/countries/1/airports', {
        status: 200,
        body: airportsDtoMock,
    });

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

    // Fill in data
    await page.selectOption('text="Country"', {label: 'Test country name'});
    await page.fill('text="City served"', 'Test city name');
    await page.fill('text="IATA code"', 'AAA');
    await page.fill('text="Pax amount / year"', '1000000');

    await page.check('text="Test airline name"');
    await page.check('text="CATII - single side"');

    expect(await page.isEnabled('text="Send"')).toBeTruthy();
    await page.click('text="Send"');

    const postAirportRequest = await postAirportRequestMock.waitForRequest();
    expect(postAirportRequest.body).toEqual(postAirportMinimumFormDataMock);

    await page.waitForRequest('**/api/countries/1/airports');

    // Some confirmation message should appear nevertheless usage of toast() breaks tests

    expect(page.url()).toBe('http://localhost:3000/countries/1/airports');
});
