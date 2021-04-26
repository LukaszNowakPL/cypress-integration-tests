import {CountriesResponse} from '../../../api/countriesApi/countriesApi.types';

export const interceptCountries = (response: CountriesResponse) => {
    cy.intercept(
        {
            method: 'GET',
            url: '/api/countries',
        },
        response,
    );
};

export const interceptPostAirport = () => {
    return cy.intercept(
        {
            method: 'POST',
            url: '/api/countries/1/airports',
        },
        {
            delay: 10,
        },
    );
};
