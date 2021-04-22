import '@testing-library/jest-dom/extend-expect';
import {configure} from '@testing-library/react';

import {server} from './_helpers/server';

beforeAll(() =>
    server.listen({
        onUnhandledRequest(req) {
            console.error('Found an unhandled %s request to %s', req.method, req.url.href);
        },
    }),
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

configure({
    testIdAttribute: 'data-test-id',
    defaultHidden: true,
});
