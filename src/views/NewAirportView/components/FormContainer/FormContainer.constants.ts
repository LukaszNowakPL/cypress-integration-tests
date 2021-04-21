import {AirportModel} from '../../utils/types';
import * as Yup from 'yup';
import {ILS} from '../../../../api/countriesApi/countriesApi.types';

export const initialValues: AirportModel = {
    countryId: '',
    city: '',
    iata: '',
    paxAmount: undefined,
    airlineId: [],
    averageDelay: 0,
    ils: ILS.NONE,
    passengerServices: [],
    notes: undefined,
};

export const airportValidationSchema = Yup.object().shape({
    countryId: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    iata: Yup.string()
        .strict(true)
        .uppercase('IATA Code must be upper-case')
        .length(3, 'IATA Code must be exactly 3 digits')
        .required('IATA code is required'),
    paxAmount: Yup.number().required('Pax amount is required'),
    airlineId: Yup.array().min(1, 'At least one airline is required'),
    averageDelay: Yup.number().required('Average delay is required'),
    ils: Yup.string().required('Ils category is required'),
});
