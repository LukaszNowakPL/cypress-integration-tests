import {ILS, PASSENGER_SERVICE} from '../../../api/countriesApi/countriesApi.types';

export interface AirportModel {
    countryId: string;
    city: string;
    iata: string;
    paxAmount?: number;
    airlineId: number[];
    averageDelay: number;
    ils: ILS;
    passengerServices: PASSENGER_SERVICE[];
    notes?: string;
}
