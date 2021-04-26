import {AirlinesResponse} from '../../../api/airlinesApi/airlinesApi.types';

export const interceptAirlines = (response: AirlinesResponse) => {
    cy.intercept(
        {
            method: 'GET',
            url: '/api/airlines',
        },
        response,
    );
};
