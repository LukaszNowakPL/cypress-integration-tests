import {useQuery} from 'react-query';
import {QUERY} from '../../../utils/types';
import {getAirportsList} from '../../../api/countriesApi/countriesApi';
import {mapAirportsDtoToModel} from './useAirportsList.helpers';

export const useAirportsList = (countryId: string) => {
    const airportsListQuery = useQuery([QUERY.AIRPORTS_LIST, countryId], async () => getAirportsList(countryId), {
        refetchOnWindowFocus: false,
    });

    return {
        ...airportsListQuery,
        data: airportsListQuery.data && mapAirportsDtoToModel(airportsListQuery.data),
    };
};
