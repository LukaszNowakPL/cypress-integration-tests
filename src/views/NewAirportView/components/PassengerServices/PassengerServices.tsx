import {Checkbox, CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Stack} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';
import {passengerServicesOptions} from './PassengerServices.constants';
import {PASSENGER_SERVICE} from '../../../../api/countriesApi/countriesApi.types';

export const PassengerServices: React.FC = () => {
    const [field, {error, touched}, {setValue, setTouched}] = useField('passengerServices');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    const handleChange = async (value: PASSENGER_SERVICE[]) => {
        await setValue(value);
        setTouched(true);
    };
    return (
        <FormControl
            data-test-id={'passenger-services-area'}
            id="passengerServices"
            isInvalid={touched && !!error}
            isDisabled={isFieldDisabled}
            marginBottom={'10px'}
        >
            <FormLabel>Passenger services</FormLabel>
            <CheckboxGroup value={field.value} onChange={handleChange}>
                <Stack>
                    {passengerServicesOptions.map(service => (
                        <Checkbox key={service.value} value={service.value}>
                            {service.label}
                        </Checkbox>
                    ))}
                </Stack>
            </CheckboxGroup>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
