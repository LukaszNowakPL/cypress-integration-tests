import {Divider, Stack, Text} from '@chakra-ui/react';
import React from 'react';
import {FormContainer} from './components/FormContainer/FormContainer';
import {City} from './components/City/City';
import {Iata} from './components/Iata/Iata';
import {SendButton} from './components/SendButton/SendButton';
import {Country} from './components/Country/Country';
import {PaxAmount} from './components/PaxAmount/PaxAmount';
import {Airlines} from './components/Airlines/Airlines';
import {AverageDelay} from './components/AverageDelay/AverageDelay';
import {Ils} from './components/Ils/Ils';
import {PassengerServices} from './components/PassengerServices/PassengerServices';
import {Notes} from './components/Notes/Notes';
import {Spinner} from '../../components/Spinner/Spinner';
import {useIsFetching} from 'react-query';

export const NewAirportView: React.FC = () => {
    const isFetching = useIsFetching();
    return (
        <Stack spacing={3}>
            {isFetching > 0 && <Spinner />}
            <Text>Add new airport to the database.</Text>
            <FormContainer>
                <Country />
                <City />
                <Iata />
                <Divider />
                <PaxAmount />
                <Airlines />
                <Divider />
                <AverageDelay />
                <Ils />
                <Divider />
                <PassengerServices />
                <Notes />
                <SendButton />
            </FormContainer>
        </Stack>
    );
};
