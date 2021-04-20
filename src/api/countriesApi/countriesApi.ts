import {axios} from '../rest/axios';
import {AirportDto, CountryDto} from './countriesDto';

export const getCountriesList = async () => {
    const {data} = await axios.get<{countries: CountryDto[]}>('/countries');
    return data.countries;
};

export const getCountry = async (idCountry: string) => {
    const {data} = await axios.get<{countries: CountryDto[]}>(`/countries/${idCountry}`);
    return data.countries[0];
};

export const getAirportsList = async (idCountry: string) => {
    const {data} = await axios.get<{airports: AirportDto[]}>(`/countries/${idCountry}/airports`);
    return data.airports;
};
