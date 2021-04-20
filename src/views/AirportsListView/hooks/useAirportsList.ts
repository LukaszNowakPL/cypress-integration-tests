import {useQuery} from 'react-query';
import {QUERY} from '../../../utils/types';
import {getAirportsList} from '../../../api/countriesApi/countriesApi';

export const useAirportsList = (countryId: string) => {
    return useQuery([QUERY.AIRPORTS_LIST, countryId], async () => getAirportsList(countryId), {
        refetchOnWindowFocus: false,
    });
};
