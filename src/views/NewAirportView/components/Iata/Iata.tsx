import {FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {AirportModel} from '../../utils/types';
import {useIsFetching} from 'react-query';
import {getIsFieldDisabled} from '../../utils/helpers';

export const Iata: React.FC = () => {
    const [field, {error, touched}] = useField('iata');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl data-test-id={'iata-area'} id="iata" isInvalid={touched && !!error} isDisabled={isFieldDisabled} marginBottom={'10px'}>
            <FormLabel>IATA code</FormLabel>
            <Input type="text" {...field} maxLength={3} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
