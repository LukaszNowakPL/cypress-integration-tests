import {useQuery} from 'react-query';
import {QUERY} from '../utils/types';
import {getAirlinesList} from '../api/airlinesApi/airlinesApi';

export const useAirlinesList = () => {
    return useQuery(QUERY.AIRLINES_LIST, async () => getAirlinesList(), {
        refetchOnWindowFocus: false,
    });
};
