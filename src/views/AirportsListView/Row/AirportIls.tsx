import React from 'react';
import {Badge} from '@chakra-ui/react';
import {ILS} from '../../../api/countriesApi/countriesApi.types';
import {getIlsCategory, getIlsSide} from './Airports.helpers';

interface AirportIlsProps {
    ils: ILS;
}

export const AirportIls: React.FC<AirportIlsProps> = ({ils}) => {
    const category = getIlsCategory(ils);
    const side = getIlsSide(ils);
    return (
        <>
            <Badge background={'red'} color={'white'} marginRight={'10px'}>
                {category}
            </Badge>
            {side}
        </>
    );
};
