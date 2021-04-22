export interface CountriesResponse {
    countries: CountryDto[];
}

export interface CountryDto {
    id: string;
    name: string;
}

export interface AirportDto {
    id: string;
    country_id: string;
    name: string;
    iata: string;
    pax_amount: number;
    airlines: number[];
    average_delay: number;
    ils_equipment: ILS;
    services: PASSENGER_SERVICE[];
    notes?: string;
}

export enum ILS {
    NONE = 'none',
    CATI_SINGLE = 'cat1_single',
    CATI_BOTH = 'cat1_both',
    CATII_SINGLE = 'cat2_single',
    CATII_BOTH = 'cat2_both',
    CATIII_SINGLE = 'cat3_single',
    CATIII_BOTH = 'cat3_both',
}

export enum PASSENGER_SERVICE {
    FASTTRACK = 'fasttrack',
    BOARDING_KIOSKS = 'boarding_kiosks',
    PUBLIC_TRANSPORT = 'public_transport',
    OBSERVATION_DECK = 'observation_deck',
    SHOWERS = 'showers',
    AIPORT_HOTEL = 'airport_hotel',
}

export interface AirportForm {
    country_id: string;
    name: string;
    iata: string;
    pax_amount: string;
    airlines: string[];
    average_delay: string;
    ils_equipment: ILS;
    services: PASSENGER_SERVICE[];
    notes?: string;
}
