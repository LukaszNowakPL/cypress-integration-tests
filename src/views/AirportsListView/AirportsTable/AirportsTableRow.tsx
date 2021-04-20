import React from 'react';
import {Tr, Td} from '@chakra-ui/react';
import {AirportDto} from '../../../api/countriesApi/countriesDto';

interface AirportsTableRowProps {
    airport: AirportDto;
}

export const AirportsTableRow: React.FC<AirportsTableRowProps> = ({airport}) => {
    return (
        <Tr>
            <Td>{airport.name}</Td>
            <Td>{airport.iata}</Td>
        </Tr>
    );
};
