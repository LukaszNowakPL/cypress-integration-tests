import * as React from 'react';
import NewAirportView from '../NewAirportView';
import {ROUTES} from '../../../utils/routes';
import {mountWithContexts} from '../../../cypress/_helpers/mountWithContexts';
import {
    countriesDtoMock,
    postAirportFormDataMock,
    postAirportMinimumFormDataMock,
} from '../../../cypress/_helpers/mocks/countriesApi.mocks';
import {airlinesDtoMock} from '../../../cypress/_helpers/mocks/airlinesApi.mocks';
import {interceptCountries, interceptPostAirport} from '../../../cypress/_helpers/interceptors/countriesApi';
import {interceptAirlines} from '../../../cypress/_helpers/interceptors/airlinesApi';

describe('Happy path', () => {
    it('fills form with full data and creates an airport', () => {
        const mountComponent = () => {
            return mountWithContexts(<NewAirportView />, {
                reactQuery: true,
                router: {path: ROUTES.ADD_AIRPORT, entry: '/airports/add'},
                chakra: true,
            });
        };

        interceptCountries(countriesDtoMock);
        interceptAirlines(airlinesDtoMock);
        interceptPostAirport().as('postAirport');

        mountComponent();
        // To use cy.wait('api call alias') if answers need some time and tests become flaky

        // Fill in data
        cy.findByRole('combobox', {name: /country/i}).select('Test country name');
        cy.findByRole('textbox', {name: /city served/i}).type('Test city name');
        cy.findByRole('textbox', {name: /iata code/i}).type('AAA');
        cy.findByRole('textbox', {name: /pax amount \/ year/i}).type('1000000');
        cy.findByText('Test airline name').click();
        cy.findByRole('textbox', {name: 'Average delay (in % of a flight time)'}).clear();
        cy.findByRole('textbox', {name: 'Average delay (in % of a flight time)'}).type('10');
        cy.findByText('CATI - both sides').click();
        cy.findByText('Fast track').click();
        cy.findByText('Boarding kiosks').click();
        cy.findByText('Public transportation').click();
        cy.findByText('Observation desk').click();
        cy.findByText('Shower services').click();
        cy.findByText('Airport hotel').click();
        cy.findByRole('textbox', {name: 'Additional notes'}).type('Additional test note');

        cy.findByRole('button', {name: /send/i}).click();

        // Checks fields and button are disabled during sending
        cy.findByRole('combobox', {name: /country/i}).should('be.disabled');
        cy.findByRole('textbox', {name: /city served/i}).should('be.disabled');
        cy.findByRole('textbox', {name: /iata code/i}).should('be.disabled');
        cy.findByRole('textbox', {name: /pax amount \/ year/i}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Test airline name'}).should('be.disabled');
        cy.findByRole('textbox', {name: 'Average delay (in % of a flight time)'}).should('be.disabled');
        cy.findByRole('textbox', {name: 'Average delay (in % of a flight time)'}).should('be.disabled');
        cy.findByRole('radio', {name: 'CATI - both sides'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Fast track'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Boarding kiosks'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Public transportation'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Observation desk'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Shower services'}).should('be.disabled');
        cy.findByRole('checkbox', {name: 'Airport hotel'}).should('be.disabled');
        cy.findByRole('textbox', {name: 'Additional notes'}).should('be.disabled');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.location().should(location => {
            expect(location.pathname).to.eq('/countries/1/airports');
        });
        // @ToDo to improve as postAirportMinimumFormDataMock.services must be in exact order
        cy.get('@postAirport')
            .its('request.body')
            .should('deep.equal', postAirportFormDataMock);
    });
    it('fills form with minumum data and creates an airport', () => {
        const mountComponent = () => {
            return mountWithContexts(<NewAirportView />, {
                reactQuery: true,
                router: {path: ROUTES.ADD_AIRPORT, entry: '/airports/add'},
                chakra: true,
            });
        };

        interceptCountries(countriesDtoMock);
        interceptAirlines(airlinesDtoMock);
        interceptPostAirport().as('postAirport');

        mountComponent();
        // To use cy.wait('api call alias') if answers need some time and tests become flaky

        // Fill in data
        cy.findByRole('combobox', {name: /country/i}).select('Test country name');
        cy.findByRole('textbox', {name: /city served/i}).type('Test city name');
        cy.findByRole('textbox', {name: /iata code/i}).type('AAA');
        cy.findByRole('textbox', {name: /pax amount \/ year/i}).type('1000000');
        cy.findByText('Test airline name').click();
        cy.findByText('CATII - single side').click();

        cy.findByRole('button', {name: /send/i}).click();

        cy.location().should(location => {
            expect(location.pathname).to.eq('/countries/1/airports');
        });

        // @ToDo to improve as postAirportMinimumFormDataMock.services must be in exact order
        cy.get('@postAirport')
            .its('request.body')
            .should('deep.equal', postAirportMinimumFormDataMock);
    });
});

describe('Negative path', () => {
    it('shows validation errors on unvalidated fields', () => {
        const mountComponent = () => {
            return mountWithContexts(<NewAirportView />, {
                reactQuery: true,
                router: {path: ROUTES.ADD_AIRPORT, entry: '/airports/add'},
                chakra: true,
            });
        };

        interceptCountries(countriesDtoMock);
        interceptAirlines(airlinesDtoMock);

        mountComponent();
        // To use cy.wait('api call alias') if answers need some time and tests become flaky

        cy.findByText('Country is required').should('not.exist');
        cy.findByText('City is required').should('not.exist');
        cy.findByText('IATA code is required').should('not.exist');
        cy.findByText('Pax amount is required').should('not.exist');
        cy.findByText('At least one airline is required').should('not.exist');
        cy.findByText('Average delay is required').should('not.exist');

        cy.findByRole('combobox', {name: /country/i}).select('Test country name');
        cy.findByRole('combobox', {name: /country/i}).select('Select country');
        cy.findByRole('textbox', {name: /city served/i}).click();
        cy.findByRole('textbox', {name: /iata code/i}).click();
        cy.findByRole('textbox', {name: 'Pax amount / year'}).click();
        cy.findByText('Test airline name').click();
        cy.findByText('Test airline name').click();
        cy.findByRole('textbox', {name: /average delay/i}).clear();
        cy.findByRole('textbox', {name: /city served/i}).click();

        cy.findByText('Country is required');
        cy.findByText('City is required');
        cy.findByText('IATA code is required');
        cy.findByText('Pax amount is required');
        cy.findByText('Average delay is required');

        cy.findByRole('combobox', {name: /country/i}).select('Test country name');
        cy.findByText('Country is required').should('not.exist');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.findByRole('textbox', {name: /city served/i}).type('Test city name');
        cy.findByText('City is required').should('not.exist');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.findByRole('textbox', {name: /iata code/i}).type('AAA');
        cy.findByText('IATA code is required').should('not.exist');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.findByRole('textbox', {name: 'Pax amount / year'}).type('10');
        cy.findByText('Pax amount is required').should('not.exist');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.findByText('Test airline name').click();
        cy.findByText('At lease one airline is required').should('not.exist');
        cy.findByRole('button', {name: /send/i}).should('be.disabled');

        cy.findByRole('textbox', {name: /average delay/i}).type('10');
        cy.findByText('Average delay is required').should('not.exist');

        cy.findByRole('button', {name: /send/i}).should('be.enabled');
    });
});
