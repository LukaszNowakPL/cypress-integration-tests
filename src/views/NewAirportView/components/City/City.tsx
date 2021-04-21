import {FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';

export const City: React.FC = () => {
    const [field, {error, touched}] = useField('city');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl data-test-id={'city-area'} id="city" isInvalid={touched && !!error} isDisabled={isFieldDisabled} marginBottom={'10px'}>
            <FormLabel>City served</FormLabel>
            <Input type="text" {...field} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
