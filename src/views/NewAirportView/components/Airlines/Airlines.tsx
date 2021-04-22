import {Checkbox, CheckboxGroup, FormControl, FormErrorMessage, FormLabel, Stack} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from "formik";
import {useIsFetching} from "react-query";
import {AirportModel} from "../../utils/types";
import {getIsFieldDisabled} from '../../utils/helpers';
import {useAirlinesList} from "../../../../hooks/useAirlinesList";

export const Airlines: React.FC = () => {
    const {data: airlines} = useAirlinesList();
    const [field,{error, touched},{setValue, setTouched}] = useField('airlineId');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    const handleChange = async (value: number[]) => {
        await setValue(value);
        setTouched(true);
    };
    return (
        <FormControl data-test-id={'airlines-area'} id="airlineId" isInvalid={touched && !!error} isDisabled={isFieldDisabled} marginBottom={'10px'}>
            <FormLabel>Airlines</FormLabel>
            <CheckboxGroup value={field.value} onChange={handleChange} isDisabled={isFieldDisabled}>
            <Stack>
            {airlines?.map(airline => <Checkbox key={airline.id} value={airline.id}>{airline.name}</Checkbox>)}
            </Stack>
            </CheckboxGroup>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
