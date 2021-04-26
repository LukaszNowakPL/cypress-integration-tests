import React from 'react';
import {Form, Formik} from 'formik';
import {airportValidationSchema, initialValues} from './FormContainer.constants';
import {AirportModel} from '../../utils/types';
import {useAirportAddition} from '../../hooks/useAirportAddition';
import {generatePath, useHistory} from 'react-router';
import {ROUTES} from '../../../../utils/routes';

export const FormContainer: React.FC = ({children}) => {
    const history = useHistory();
    const {addAirport} = useAirportAddition();
    const handleSubmit = async (values: AirportModel) => {
        try {
            await addAirport({idCountry: values.countryId, values});
            history.push(generatePath(ROUTES.AIRPORTS_LIST, {countryId: values.countryId}));
        } catch (error) {
            console.warn(error)
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={airportValidationSchema}>
            <Form>{children}</Form>
        </Formik>
    );
};
