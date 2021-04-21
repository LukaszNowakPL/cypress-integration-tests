import {axios} from '../rest/axios';
import {AirlineDto} from './airlinesApi.types';

export const getAirlinesList = async () => {
    const {data} = await axios.get<{airlines: AirlineDto[]}>('/airlines');
    return data.airlines;
};
