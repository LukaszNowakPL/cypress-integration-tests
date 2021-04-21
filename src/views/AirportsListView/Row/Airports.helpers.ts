import {AirlineDto} from "../../../api/airlinesApi/airlinesApi.types";
import {ILS} from "../../../api/countriesApi/countriesApi.types";

export const getMappedAirlines = (listedAirlines: AirlineDto[], airportAirlines: number[]):string[] => {
    return airportAirlines.map(airline => listedAirlines.find(listedAirline => listedAirline.id === String(airline))?.name || '')
};

export const getIlsSide = (ils: ILS): string => {
    switch(ils) {
        case ILS.NONE: return '';
        case ILS.CATI_SINGLE:
        case ILS.CATII_SINGLE:
        case ILS.CATIII_SINGLE:
            return 'single';
        case ILS.CATI_BOTH:
        case ILS.CATII_BOTH:
        case ILS.CATIII_BOTH:
            return 'both'
    }
};

export const getIlsCategory = (ils: ILS): string => {
    switch(ils) {
        case ILS.NONE: return 'none';
        case ILS.CATI_SINGLE:
        case ILS.CATI_BOTH:
            return 'CAT I';
        case ILS.CATII_SINGLE:
        case ILS.CATII_BOTH:
            return 'CAT II';
        case ILS.CATIII_SINGLE:
        case ILS.CATIII_BOTH:
            return 'CAT III'
    }
};