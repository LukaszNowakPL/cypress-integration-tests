import {axios} from '../rest/axios';
import {CountryDto} from './countriesDto';

export const getCountriesList = async () => {
    const {data} = await axios.get<{countries: CountryDto[]}>('/countries');
    return data.countries;
};
