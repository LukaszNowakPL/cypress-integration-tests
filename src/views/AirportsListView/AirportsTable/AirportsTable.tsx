import React from 'react';
import {Table, Tbody, Th, Thead, Tr} from '@chakra-ui/react';
import {AirportsTableRow} from './AirportsTableRow';
import {AirportDto} from '../../../api/countriesApi/countriesDto';

interface AirportsTableProps {
    airports: AirportDto[];
}

export const AirportsTable: React.FC<AirportsTableProps> = ({airports}) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Iata</Th>
                </Tr>
            </Thead>
            <Tbody>
                {airports.map(airport => (
                    <AirportsTableRow key={airport.iata} airport={airport} />
                ))}
            </Tbody>
        </Table>
    );
};
