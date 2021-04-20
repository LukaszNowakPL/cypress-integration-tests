import {Spinner as ChakraSpinner, Center} from '@chakra-ui/react';
import React from 'react';

export const Spinner: React.FC = () => {
    return (
        <Center>
            <ChakraSpinner position={'absolute'} width={'100px'} height={'100px'} />
        </Center>
    );
};
