import {AirportForm, CountriesResponse, ILS, PASSENGER_SERVICE} from '../../../api/countriesApi/countriesApi.types';

export const countriesDtoMock: CountriesResponse = {
    countries: [
        {
            id: '1',
            name: 'Test country name',
        },
    ],
};

export const postAirportMinimumFormDataMock: AirportForm = {
    country_id: '1',
    name: 'Test city name',
    iata: 'AAA',
    pax_amount: '1000000',
    airlines: ['1'],
    average_delay: '0',
    ils_equipment: ILS.CATII_SINGLE,
    services: [],
};

export const postAirportFormDataMock: AirportForm = {
    country_id: '1',
    name: 'Test city name',
    iata: 'AAA',
    pax_amount: '1000000',
    airlines: ['1'],
    average_delay: '10',
    ils_equipment: ILS.CATI_BOTH,
    services: [
        PASSENGER_SERVICE.FASTTRACK,
        PASSENGER_SERVICE.BOARDING_KIOSKS,
        PASSENGER_SERVICE.PUBLIC_TRANSPORT,
        PASSENGER_SERVICE.OBSERVATION_DECK,
        PASSENGER_SERVICE.SHOWERS,
        PASSENGER_SERVICE.AIPORT_HOTEL,
    ],
    notes: 'Additional test note',
};
