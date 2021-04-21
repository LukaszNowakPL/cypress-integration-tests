import React from 'react';
import {Tooltip, Badge} from '@chakra-ui/react';
import {useAirlinesList} from '../../../hooks/useAirlinesList';
import {getMappedAirlines} from './Airports.helpers';

interface AirportAirlinesProps {
    airlines: number[];
}

export const AirportAirlines: React.FC<AirportAirlinesProps> = ({airlines}) => {
    const {data: airlinesList} = useAirlinesList();
    const mappedAirlines = getMappedAirlines(airlinesList || [], airlines);
    return (
        <Tooltip label={mappedAirlines.join(', ')}>
            <Badge>{mappedAirlines.length}</Badge>
        </Tooltip>
    );
};
