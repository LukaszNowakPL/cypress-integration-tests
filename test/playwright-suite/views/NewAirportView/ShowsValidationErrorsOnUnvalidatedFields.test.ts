/// <reference types="jest-playwright-preset" />
/// <reference types="expect-playwright" />

import { Mockiavelli } from 'mockiavelli';
import {expect} from '@jest/globals';
import {getDocument, queries, waitFor, within} from 'playwright-testing-library';
import {airlinesDtoMock} from '../../_helpers/mocks/airlinesApi.mocks';
import {countriesDtoMock} from '../../_helpers/mocks/countriesApi.mocks';

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

    await page.goto('http://localhost:3000/airports/add');

    const {getByRole, findByText, getByTestId, queryByText} = queries;
    const $document = await getDocument(page);

    const $countryArea = await getByTestId($document, 'country-area');
    const $cityArea = await getByTestId($document, 'city-area');
    const $airlinesArea = await getByTestId($document, 'airlines-area');
    const $iataArea = await getByTestId($document, 'iata-area');
    const $paxAmountArea = await getByTestId($document, 'pax-amount-area');
    const $averageDelayArea = await getByTestId($document, 'average-delay-area');

    // Wait for data being fetched
    const $countrySelector = await getByRole($countryArea, 'combobox', {name: /country/i});
    await $countrySelector.click();
    await findByText($countryArea, 'Test country name');
    await findByText($airlinesArea, 'Test airline name');

    expect(await queryByText($countryArea, 'Country is required')).toBeNull();
    expect(await queryByText($cityArea, 'City is required')).toBeNull();
    expect(await queryByText($iataArea, 'IATA code is required')).toBeNull();
    expect(await queryByText($paxAmountArea, 'Pax amount is required')).toBeNull();
    expect(await queryByText($airlinesArea, 'At least one airline is required')).toBeNull();
    expect(await queryByText($averageDelayArea, 'Avarage delay is required')).toBeNull();

    await page.focus('text="Country"');
    await page.focus('text="City served"');
    await page.focus('text="IATA code"');
    await page.focus('text="Pax amount / year"');
    await page.check('text="Test airline name"');
    await page.uncheck('text="Test airline name"');
    await page.press('text="Average delay (in % of a flight time)"', 'Backspace');
    await page.focus('text="City served"');

    await findByText($countryArea, 'Country is required');
    await findByText($cityArea, 'City is required');
    await findByText($iataArea, 'IATA code is required');
    await findByText($paxAmountArea, 'Pax amount is required');
    await findByText($airlinesArea, 'At least one airline is required');
    await findByText($averageDelayArea, 'Average delay is required');

    await page.selectOption('text="Country"', {label: 'Test country name'});
    expect(await queryByText($countryArea, 'Country is required')).toBeNull();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();

    await page.fill('text="City served"', 'Test city name');
    expect(await queryByText($cityArea, 'City is required')).toBeNull();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();

    await page.fill('text="IATA code"', 'AAA');
    expect(await queryByText($iataArea, 'IATA code is required')).toBeNull();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();

    await page.fill('text="Pax amount / year"', '10');
    expect(await queryByText($paxAmountArea, 'Pax amount is required')).toBeNull();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();

    await page.check('text="Test airline name"');
    expect(await queryByText($airlinesArea, 'At least one airline is required')).toBeNull();
    expect(await page.isDisabled('text="Send"')).toBeTruthy();

    await page.fill('text="Average delay (in % of a flight time)"', '10');
    expect(await queryByText($averageDelayArea, 'Average delay is required')).toBeNull();

    expect(await page.isEnabled('text="Send"')).toBeTruthy();
});
