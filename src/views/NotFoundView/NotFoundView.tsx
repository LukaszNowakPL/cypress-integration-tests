import React from 'react';
import {Center} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';

export const NotFoundView: React.FC = () => {
    return (
        <Center>
            <WarningIcon marginRight={'10px'} />
            The page you are trying to visit is not available. Please use main menu to navigate properly.
        </Center>
    );
};

export default NotFoundView;
