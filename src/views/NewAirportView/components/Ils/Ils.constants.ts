import {ILS} from '../../../../api/countriesApi/countriesApi.types';

export const ilsOptions = [
    {value: ILS.NONE, label: 'none'},
    {value: ILS.CATI_SINGLE, label: 'CATI - single side'},
    {value: ILS.CATI_BOTH, label: 'CATI - both sides'},
    {value: ILS.CATII_SINGLE, label: 'CATII - single side'},
    {value: ILS.CATII_BOTH, label: 'CATII - both sides'},
    {value: ILS.CATIII_SINGLE, label: 'CATIII - single side'},
    {value: ILS.CATIII_BOTH, label: 'CATIII - both sides'},
];
