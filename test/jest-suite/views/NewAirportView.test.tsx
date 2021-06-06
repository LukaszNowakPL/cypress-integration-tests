import React from 'react';
import {server} from "../_helpers/server";
import NewAirportView from "../../../src/views/NewAirportView/NewAirportView";
import {ROUTES} from "../../../src/utils/routes";
import {renderWithContexts} from "../_helpers/renderWithContexts";
import {
    countriesDtoMock,
    postAirportFormDataMock,
    postAirportMinimumFormDataMock
} from "../_helpers/mocks/countriesApi.mocks";
import {countriesHandler, postAirportHandler} from "../_helpers/handlers/countriesApi";
import {airlinesDtoMock} from "../_helpers/mocks/airlinesApi.mocks";
import {airlinesHandler} from "../_helpers/handlers/airlinesApi";
import {screen, waitFor, within} from '@testing-library/react';
import userEvent from "@testing-library/user-event/dist";

describe('NewAirportView', () => {
    jest.setTimeout(30000);
    const renderComponent = () => {
        return renderWithContexts(<NewAirportView/>, {reactQuery: true, router: {path: ROUTES.ADD_AIRPORT, entries: ['/airports/add']}, chakra: true})
    };

    describe('Happy path', () => {
        it('fills form with full data and creates an airport', async () => {
            server.use(
                countriesHandler(countriesDtoMock),
                airlinesHandler(airlinesDtoMock),
                postAirportHandler(1, postAirportFormDataMock),
            );
            const {history} = renderComponent();

            const countryArea = screen.getByTestId('country-area');
            const cityArea = screen.getByTestId('city-area');
            const airlinesArea = screen.getByTestId('airlines-area');
            const iataArea = screen.getByTestId('iata-area');
            const paxAmountArea = screen.getByTestId('pax-amount-area');
            const averageDelayArea = screen.getByTestId('average-delay-area');
            const ilsArea = screen.getByTestId('ils-area');
            const passengerServicesArea = screen.getByTestId('passenger-services-area');
            const notesArea = screen.getByTestId('notes-area');
            const sendButtonArea = screen.getByTestId('send-button-area');

            // Wait for data being fetched
            const countrySelector = within(countryArea).getByRole('combobox', {name: /country/i});
            userEvent.click(countrySelector);
            await within(countryArea).findByText('Test country name');
            await within(airlinesArea).findByText('Test airline name');

            // Fill in data
            const cityField = within(cityArea).getByRole('textbox', {name: /city served/i});
            const iataField = within(iataArea).getByRole('textbox', {name: /iata code/i});
            const paxAmountField = within(paxAmountArea).getByRole('textbox', {name: /pax amount \/ year/i});
            const testAirlineCheckbox = within(airlinesArea).getByRole('checkbox', {name: 'Test airline name'});
            const averageDelayField = within(averageDelayArea).getByRole('textbox', {name: 'Average delay (in % of a flight time)'});
            const ilsRadio = within(ilsArea).getByRole('radio', {name: 'CATI - both sides'});
            const fastTrackCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Fast track'});
            const boardingKiosksCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Boarding kiosks'});
            const publicTransportationCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Public transportation'});
            const observationDeskCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Observation desk'});
            const showerServicesCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Shower services'});
            const airportHotelCheckbox = within(passengerServicesArea).getByRole('checkbox', {name: 'Airport hotel'});
            const notesField = within(notesArea).getByRole('textbox', {name: 'Additional notes'});

            userEvent.selectOptions(countrySelector, 'Test country name');
            userEvent.type(cityField, 'Test city name');
            userEvent.type(iataField, 'AAA');
            userEvent.type(paxAmountField, '1000000');
            userEvent.click(testAirlineCheckbox);
            userEvent.clear(averageDelayField);
            userEvent.type(averageDelayField, '10');
            userEvent.click(ilsRadio);
            userEvent.click(fastTrackCheckbox);
            userEvent.click(boardingKiosksCheckbox);
            userEvent.click(publicTransportationCheckbox);
            userEvent.click(observationDeskCheckbox);
            userEvent.click(showerServicesCheckbox);
            userEvent.click(airportHotelCheckbox);
            userEvent.type(notesField, 'Additional test note');

            const sendButton = within(sendButtonArea).getByRole('button', {name: /send/i});
            expect(sendButton).toBeEnabled();
            userEvent.click(sendButton);

            // Checks fields and button are disabled during sending
            expect(countrySelector).toBeDisabled();
            expect(cityField).toBeDisabled();
            expect(iataField).toBeDisabled();
            expect(paxAmountField).toBeDisabled();
            expect(testAirlineCheckbox).toBeDisabled();
            expect(averageDelayField).toBeDisabled();
            expect(ilsRadio).toBeDisabled();
            expect(fastTrackCheckbox).toBeDisabled();
            expect(boardingKiosksCheckbox).toBeDisabled();
            expect(publicTransportationCheckbox).toBeDisabled();
            expect(observationDeskCheckbox).toBeDisabled();
            expect(showerServicesCheckbox).toBeDisabled();
            expect(airportHotelCheckbox).toBeDisabled();
            expect(notesField).toBeDisabled();
            expect(sendButton).toBeDisabled();

            // Some confirmation message should appear nevertheless usage of toast() breaks tests

            await waitFor(() => expect(history?.entries).toHaveLength(2), {timeout: 5000});
            expect(history?.location.pathname).toBe('/countries/1/airports')
        });

        it('fills form with minimum data and creates an airport', async () => {
            server.use(
                countriesHandler(countriesDtoMock),
                airlinesHandler(airlinesDtoMock),
                postAirportHandler(1, postAirportMinimumFormDataMock),
            );
            const {history} = renderComponent();

            const countryArea = screen.getByTestId('country-area');
            const cityArea = screen.getByTestId('city-area');
            const airlinesArea = screen.getByTestId('airlines-area');
            const iataArea = screen.getByTestId('iata-area');
            const paxAmountArea = screen.getByTestId('pax-amount-area');
            const ilsArea = screen.getByTestId('ils-area');
            const sendButtonArea = screen.getByTestId('send-button-area');

            // Wait for data being fetched
            const countrySelector = within(countryArea).getByRole('combobox', {name: /country/i});
            userEvent.click(countrySelector);
            await within(countryArea).findByText('Test country name');
            await within(airlinesArea).findByText('Test airline name');

            // Fill in data
            const cityField = within(cityArea).getByRole('textbox', {name: /city served/i});
            const iataField = within(iataArea).getByRole('textbox', {name: /iata code/i});
            const paxAmountField = within(paxAmountArea).getByRole('textbox', {name: /pax amount \/ year/i});
            const testAirlineCheckbox = within(airlinesArea).getByRole('checkbox', {name: 'Test airline name'});
            const ilsRadio = within(ilsArea).getByRole('radio', {name: 'CATII - single side'});

            userEvent.selectOptions(countrySelector, 'Test country name');
            userEvent.type(cityField, 'Test city name');
            userEvent.type(iataField, 'AAA');
            userEvent.type(paxAmountField, '1000000');
            userEvent.click(testAirlineCheckbox);
            userEvent.click(ilsRadio);

            const sendButton = within(sendButtonArea).getByRole('button', {name: /send/i});
            expect(sendButton).toBeEnabled();
            userEvent.click(sendButton);

            // Some confirmation message should appear nevertheless usage of toast() breaks tests

            await waitFor(() => expect(history?.entries).toHaveLength(2));
            expect(history?.location.pathname).toBe('/countries/1/airports')
        });
    });

    describe('Negative path', () => {
        it('shows validation errors on unvalidated fields', async () => {
            server.use(
                countriesHandler(countriesDtoMock),
                airlinesHandler(airlinesDtoMock),
            );
            renderComponent();

            const countryArea = screen.getByTestId('country-area');
            const cityArea = screen.getByTestId('city-area');
            const airlinesArea = screen.getByTestId('airlines-area');
            const iataArea = screen.getByTestId('iata-area');
            const paxAmountArea = screen.getByTestId('pax-amount-area');
            const averageDelayArea = screen.getByTestId('average-delay-area');
            const sendButtonArea = screen.getByTestId('send-button-area');

            // Wait for data being fetched
            const countrySelector = within(countryArea).getByRole('combobox', {name: /country/i});
            userEvent.click(countrySelector);
            await within(countryArea).findByText('Test country name');
            await within(airlinesArea).findByText('Test airline name');

            const cityField = within(cityArea).getByRole('textbox', {name: /city served/i});
            const iataField = within(iataArea).getByRole('textbox', {name: /iata code/i});
            const paxAmountField = within(paxAmountArea).getByRole('textbox', {name: /pax amount \/ year/i});
            const testAirlineCheckbox = within(airlinesArea).getByRole('checkbox', {name: 'Test airline name'});
            const averageDelayField = within(averageDelayArea).getByRole('textbox', {name: 'Average delay (in % of a flight time)'});
            const sendButton = within(sendButtonArea).getByRole('button', {name: /send/i});

            expect(within(countryArea).queryByText('Country is required')).not.toBeInTheDocument();
            expect(within(cityArea).queryByText('City is required')).not.toBeInTheDocument();
            expect(within(iataArea).queryByText('IATA code is required')).not.toBeInTheDocument();
            expect(within(paxAmountArea).queryByText('Pax amount is required')).not.toBeInTheDocument();
            expect(within(airlinesArea).queryByText('At least one airline is required')).not.toBeInTheDocument();
            expect(within(averageDelayArea).queryByText('Average delay is required')).not.toBeInTheDocument();

            userEvent.click(countrySelector);
            userEvent.click(cityField);
            userEvent.click(iataField);
            userEvent.click(paxAmountField);
            userEvent.click(testAirlineCheckbox);
            userEvent.click(testAirlineCheckbox);
            userEvent.clear(averageDelayField);
            userEvent.click(cityField);

            await within(countryArea).findByText('Country is required');
            expect(within(cityArea).getByText('City is required')).toBeInTheDocument();
            expect(within(iataArea).getByText('IATA code is required')).toBeInTheDocument();
            expect(within(paxAmountArea).getByText('Pax amount is required')).toBeInTheDocument();
            expect(within(airlinesArea).getByText('At least one airline is required')).toBeInTheDocument();
            expect(within(averageDelayArea).getByText('Average delay is required')).toBeInTheDocument();

            userEvent.selectOptions(countrySelector, 'Test country name');
            await waitFor(() => expect(within(countryArea).queryByText('Country is required')).not.toBeInTheDocument());
            expect(sendButton).toBeDisabled();

            userEvent.type(cityField, 'Test city name');
            await waitFor(() => expect(within(cityArea).queryByText('City is required')).not.toBeInTheDocument());
            expect(sendButton).toBeDisabled();

            userEvent.type(iataField, 'AAA');
            await waitFor(() => expect(within(cityArea).queryByText('Iata code is required')).not.toBeInTheDocument());
            expect(sendButton).toBeDisabled();

            userEvent.type(paxAmountField, '10');
            await waitFor(() => expect(within(cityArea).queryByText('Pax amount is required')).not.toBeInTheDocument());
            expect(sendButton).toBeDisabled();

            userEvent.click(testAirlineCheckbox);
            await waitFor(() => expect(within(cityArea).queryByText('At least one airline is required')).not.toBeInTheDocument());
            expect(sendButton).toBeDisabled();

            userEvent.type(averageDelayField, '10');
            await waitFor(() => expect(within(cityArea).queryByText('Average delay is required')).not.toBeInTheDocument());

            expect(sendButton).toBeEnabled();
        });
    })
});