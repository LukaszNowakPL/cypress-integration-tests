import {useQuery} from 'react-query';
import {QUERY} from '../../../utils/types';
import {getCountriesList} from '../../../api/countriesApi/countriesApi';

export const useCountriesList = () => {
    return useQuery(QUERY.COUNTRIES_LIST, async () => getCountriesList(), {
        refetchOnWindowFocus: false,
    });
};
