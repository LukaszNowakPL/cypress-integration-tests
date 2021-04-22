import {rest} from 'msw';
import {AirlinesResponse} from '../../../../src/api/airlinesApi/airlinesApi.types';

export const airlinesHandler = (responseData: AirlinesResponse) => {
    return rest.get(`/api/airlines`, (req, res, ctx) => {
        return res(ctx.json(responseData));
    });
};
