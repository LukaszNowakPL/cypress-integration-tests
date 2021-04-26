import {useMutation} from 'react-query';
import {AirportModel} from '../utils/types';
import {postAirport} from '../../../api/countriesApi/countriesApi';
import {mapAirportModelToForm} from './useAirportAddition.helpers';

interface AddAirportProps {
    idCountry: string;
    values: AirportModel;
}

export const useAirportAddition = () => {
    const {mutateAsync: addAirport} = useMutation(
        ({idCountry, values}: AddAirportProps) => postAirport(idCountry, mapAirportModelToForm(values)),
        {
            onSuccess: () => {
                // Some confirmation info, nevertheless usage of toast() break tests
            },
            onError: () => {
                // Some error message, nevertheless usage of toast() break tests
            },
        },
    );
    return {
        addAirport,
    };
};
