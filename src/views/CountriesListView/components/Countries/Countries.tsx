import {Alert, AlertDescription, AlertIcon} from '@chakra-ui/react';
import React from 'react';
import {CountriesTable} from '../CountriesTable/CountriesTable';
import {Spinner} from '../../../../components/Spinner/Spinner';
import {useCountriesList} from '../../../../hooks/useCountriesList';

export const Countries: React.FC = () => {
    const {data, error, isFetching} = useCountriesList();

    return (
        <>
            {isFetching && <Spinner />}
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching list of countries failed.</AlertDescription>
                </Alert>
            )}
            {data && <CountriesTable countries={data} />}
        </>
    );
};
