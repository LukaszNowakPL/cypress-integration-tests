import {Spinner as ChakraSpinner, Center} from '@chakra-ui/react';
import React from 'react';

export const Spinner: React.FC = () => {
    return (
        <Center>
            <ChakraSpinner data-test-id={'spinner'} position={'absolute'} width={'100px'} height={'100px'} />
        </Center>
    );
};
