import React from 'react';
import {Table, Tbody, Th, Thead, Tr} from '@chakra-ui/react';
import {AirportModel} from '../../NewAirportView/utils/types';
import {Airport} from '../Row/Airport';

interface AirportsTableProps {
    airports: AirportModel[];
}

export const AirportsTable: React.FC<AirportsTableProps> = ({airports}) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Iata</Th>
                    <Th>Pax / year</Th>
                    <Th>Airlines</Th>
                    <Th>Category</Th>
                </Tr>
            </Thead>
            <Tbody>
                {airports.map(airport => (
                    <Airport key={airport.iata} airport={airport} />
                ))}
            </Tbody>
        </Table>
    );
};
