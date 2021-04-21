import {FormControl, FormErrorMessage, FormLabel, Input} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';
import NumberFormat from 'react-number-format';

export const AverageDelay: React.FC = () => {
    const [field, {error, touched}] = useField('averageDelay');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl
            data-test-id={'average-delay-area'}
            id="averageDelay"
            isInvalid={touched && !!error}
            isDisabled={isFieldDisabled}
            marginBottom={'10px'}
        >
            <FormLabel>Average delay (in % of a flight time)</FormLabel>
            <NumberFormat customInput={Input} allowNegative={false} decimalScale={2} maxLength={6} {...field} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
