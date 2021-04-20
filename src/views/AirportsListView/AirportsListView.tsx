import {Alert, AlertDescription, AlertIcon, Stack, Text, Code} from '@chakra-ui/react';
import React from 'react';
import {useParams} from 'react-router';
import {useCountry} from './hooks/useCountry';
import {Spinner} from '../../components/Spinner/Spinner';
import {Airports} from './components/Ariports/Airports';

export const AirportsListView: React.FC = () => {
    const {countryId} = useParams<{countryId: string}>();
    const {data: country, isFetching, error} = useCountry(countryId);
    return (
        <Stack spacing={3}>
            {isFetching && <Spinner />}
            {error && (
                <Alert status="error">
                    <AlertIcon />
                    <AlertDescription>Fetching country data failed.</AlertDescription>
                </Alert>
            )}
            {country && (
                <>
                    <Text>
                        Airports list in <Code>{country.name}</Code>
                    </Text>
                    <Airports />
                </>
            )}
        </Stack>
    );
};
