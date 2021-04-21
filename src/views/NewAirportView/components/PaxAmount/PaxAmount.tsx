import {FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';
import NumberFormat from 'react-number-format';

export const PaxAmount: React.FC = () => {
    const [field, {error, touched}] = useField('paxAmount');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl
            data-test-id={'pax-amount-area'}
            id="paxAmount"
            isInvalid={touched && !!error}
            isDisabled={isFieldDisabled}
            marginBottom={'10px'}
        >
            <FormLabel>Pax amount / year</FormLabel>
            <NumberFormat customInput={Input} allowNegative={false} decimalScale={0} maxLength={9} {...field} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
