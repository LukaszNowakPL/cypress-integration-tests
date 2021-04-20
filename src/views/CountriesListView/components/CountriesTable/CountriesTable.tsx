import React from 'react';
import {Table, Tbody, Th, Thead, Tr} from '@chakra-ui/react';
import {CountryDto} from '../../../../api/countriesApi/countriesDto';
import {CountriesTableRow} from './CountriesTableRow';

interface CountriesTableProps {
    countries: CountryDto[];
}

export const CountriesTable: React.FC<CountriesTableProps> = ({countries}) => {
    return (
        <Table variant="simple">
            <Thead>
                <Tr>
                    <Th>Name</Th>
                    <Th />
                </Tr>
            </Thead>
            <Tbody>
                {countries.map(country => (
                    <CountriesTableRow key={country.name} country={country} />
                ))}
            </Tbody>
        </Table>
    );
};
