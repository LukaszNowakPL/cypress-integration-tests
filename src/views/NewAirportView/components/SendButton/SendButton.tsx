import React from 'react';
import {Stack, Button} from '@chakra-ui/react';
import {useFormikContext} from 'formik';
import {AirportModel} from '../../utils/types';
import {getIsButtonDisabled} from './SendButton.helpers';

export const SendButton: React.FC = () => {
    const {isValid, isSubmitting, touched} = useFormikContext<AirportModel>();
    const isButtonDisabled = getIsButtonDisabled(isValid, touched);
    return (
        <Stack data-test-id={'send-button-area'} direction="row" spacing={4}>
            <Button type={'submit'} size={'lg'} isLoading={isSubmitting} isDisabled={isButtonDisabled}>
                Send
            </Button>
        </Stack>
    );
};
