import {Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {Countries} from './components/Countries/Countries';

export const CountriesListView: React.FC = () => {
    return (
        <Stack spacing={3}>
            <Text>Click one of buttons below below to see list of given country's airports.</Text>
            <Countries />
        </Stack>
    );
};
