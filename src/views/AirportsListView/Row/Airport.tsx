import React from 'react';
import {Tr, Td} from '@chakra-ui/react';
import {AirportModel} from '../../NewAirportView/utils/types';
import {AirportAirlines} from './AirportAirlines';
import {AirportIls} from './AirportIls';

interface AirportProps {
    airport: AirportModel;
}

export const Airport: React.FC<AirportProps> = ({airport: {airlineId, city, iata, paxAmount, ils}}) => {
    return (
        <Tr>
            <Td>{city}</Td>
            <Td>{iata}</Td>
            <Td>{paxAmount}</Td>
            <Td>
                <AirportAirlines airlines={airlineId} />
            </Td>
            <Td>
                <AirportIls ils={ils} />
            </Td>
        </Tr>
    );
};
