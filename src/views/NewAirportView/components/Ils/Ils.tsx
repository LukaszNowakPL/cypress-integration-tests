import {Radio, FormControl, FormErrorMessage, FormLabel, Stack, RadioGroup} from '@chakra-ui/react';
import React from 'react';
import {useField, useFormikContext} from 'formik';
import {useIsFetching} from 'react-query';
import {AirportModel} from '../../utils/types';
import {getIsFieldDisabled} from '../../utils/helpers';
import {ilsOptions} from './Ils.constants';
import {ILS} from '../../../../api/countriesApi/countriesApi.types';

export const Ils: React.FC = () => {
    const [field, {error, touched}, {setValue, setTouched}] = useField('ils');
    const {isSubmitting} = useFormikContext<AirportModel>();
    const isFetching = useIsFetching();
    const isFieldDisabled = getIsFieldDisabled(isFetching > 0, isSubmitting);
    const handleChange = async (value: ILS) => {
        await setValue(value);
        setTouched(true);
    };
    return (
        <FormControl data-test-id={'ils-area'} id="ils" isInvalid={touched && !!error} isDisabled={isFieldDisabled} marginBottom={'10px'}>
            <FormLabel>Ils category</FormLabel>
            <RadioGroup onChange={handleChange} value={field.value}>
                <Stack>
                    {ilsOptions.map(ilsOption => (
                        <Radio key={ilsOption.value} value={ilsOption.value}>
                            {ilsOption.label}
                        </Radio>
                    ))}
                </Stack>
            </RadioGroup>
            <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
    );
};
