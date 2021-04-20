import {Box} from '@chakra-ui/react';
import React from 'react';

export const Footer: React.FC = () => {
    const actualDate = new Date();
    return (
        <Box marginTop={'20px'}>
            {actualDate.getFullYear()} by{' '}
            <a href="https://github.com/LukaszNowakPL/" target="_blank" rel="noopener noreferrer">
                Łukasz Nowak
            </a>
        </Box>
    );
};
