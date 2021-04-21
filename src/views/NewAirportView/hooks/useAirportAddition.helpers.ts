import {AirportModel} from '../utils/types';
import {AirportForm} from '../../../api/countriesApi/countriesApi.types';

export const mapAirportModelToForm = (airportModel: AirportModel): AirportForm => {
    const {city, iata, countryId, paxAmount, airlineId, averageDelay, ils, passengerServices, notes} = airportModel;
    return {
        country_id: countryId,
        name: city,
        iata,
        pax_amount: paxAmount || 0,
        airlines: airlineId,
        average_delay: averageDelay,
        ils_equipment: ils,
        services: passengerServices,
        notes,
    };
};
