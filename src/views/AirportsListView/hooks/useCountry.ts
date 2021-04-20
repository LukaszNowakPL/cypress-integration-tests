import {useQuery} from 'react-query';
import {QUERY} from '../../../utils/types';
import {getCountry} from '../../../api/countriesApi/countriesApi';

export const useCountry = (countryId: string) => {
    return useQuery([QUERY.COUNTRY, countryId], async () => getCountry(countryId), {
        refetchOnWindowFocus: false,
    });
};
