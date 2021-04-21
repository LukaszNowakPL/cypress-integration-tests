import {axios} from '../rest/axios';
import {AirportDto, CountryDto} from './countriesApi.types';
import {AirportForm} from './countriesApi.types';

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

export const postAirport = (idCountry: string, values: AirportForm) => {
    return axios.post(`/countries/${idCountry}/airports`, values);
};
