import {useMutation} from 'react-query';
import {AirportModel} from '../utils/types';
import {postAirport} from '../../../api/countriesApi/countriesApi';
import {mapAirportModelToForm} from './useAirportAddition.helpers';
import {useToast} from '@chakra-ui/react';

interface AddAirportProps {
    idCountry: string;
    values: AirportModel;
}

export const useAirportAddition = () => {
    const toast = useToast();

    const {mutateAsync: addAirport} = useMutation(
        ({idCountry, values}: AddAirportProps) => postAirport(idCountry, mapAirportModelToForm(values)),
        {
            onSuccess: () => {
                toast({
                    description: 'Airport added.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            },
            onError: () => {
                toast({
                    description: 'Unable to add an airport.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            },
        },
    );
    return {
        addAirport,
    };
};
