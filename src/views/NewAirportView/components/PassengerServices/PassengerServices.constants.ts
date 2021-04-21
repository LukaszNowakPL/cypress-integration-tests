import {PASSENGER_SERVICE} from '../../../../api/countriesApi/countriesApi.types';

export const passengerServicesOptions = [
    {value: PASSENGER_SERVICE.FASTTRACK, label: 'Fast track'},
    {value: PASSENGER_SERVICE.BOARDING_KIOSKS, label: 'Boarding kiosks'},
    {value: PASSENGER_SERVICE.PUBLIC_TRANSPORT, label: 'Public transportation'},
    {value: PASSENGER_SERVICE.OBSERVATION_DECK, label: 'Observation desk'},
    {value: PASSENGER_SERVICE.SHOWERS, label: 'Shower services'},
    {value: PASSENGER_SERVICE.AIPORT_HOTEL, label: 'Airport hotel'},
];
