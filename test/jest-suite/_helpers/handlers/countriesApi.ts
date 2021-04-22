import {rest} from 'msw';
import {AirportForm, CountriesResponse} from '../../../../src/api/countriesApi/countriesApi.types';
import {isBodySame} from './_reqBodyHelpers';

export const countriesHandler = (responseData: CountriesResponse) => {
    return rest.get(`/api/countries`, (req, res, ctx) => {
        return res(ctx.json(responseData));
    });
};

export const postAirportHandler = (countryId: number, formData: AirportForm) =>
    rest.post(`/api/countries/${countryId}/airports`, (req, res, ctx) => {
        if (isBodySame(formData, req)) {
            return res(ctx.json({}));
        }
    });
