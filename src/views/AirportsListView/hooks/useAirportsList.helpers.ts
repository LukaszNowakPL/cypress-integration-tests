import {AirportDto} from '../../../api/countriesApi/countriesApi.types';
import {AirportModel} from '../../NewAirportView/utils/types';

export const mapAirportsDtoToModel = (airports: AirportDto[]): AirportModel[] => {
    return airports.map(({id, iata, notes, ...airport}) => {
        return {
            id,
            countryId: airport.country_id,
            city: airport.name,
            iata,
            paxAmount: airport.pax_amount,
            airlineId: airport.airlines,
            averageDelay: airport.average_delay,
            ils: airport.ils_equipment,
            passengerServices: airport.services,
            notes,
        };
    });
};
