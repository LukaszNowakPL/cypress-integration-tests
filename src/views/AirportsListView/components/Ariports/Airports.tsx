import {Alert, AlertDescription, AlertIcon, Stack} from '@chakra-ui/react';
import React from 'react';
import {useParams} from 'react-router';
import {useAirportsList} from '../../hooks/useAirportsList';
import {AirportsTable} from '../../AirportsTable/AirportsTable';

export const Airports: React.FC = () => {
    const {countryId} = useParams<{countryId: string}>();
    const {data, error} = useAirportsList(countryId);
    return (
        <Stack spacing={3}>
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching airports list failed.</AlertDescription>
                </Alert>
            )}
            {data && <AirportsTable airports={data} />}
        </Stack>
    );
};
