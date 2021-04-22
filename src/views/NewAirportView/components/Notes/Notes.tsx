import {FormControl, FormErrorMessage, FormLabel, Textarea} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';

export const Notes: React.FC = () => {
    const [field, {error, touched}] = useField('notes');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    return (
        <FormControl
            data-test-id={'notes-area'}
            id="notes"
            isInvalid={touched && !!error}
            isDisabled={isFieldDisabled}
            marginBottom={'10px'}
        >
            <FormLabel>Additional notes</FormLabel>
            <Textarea {...field} />
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
