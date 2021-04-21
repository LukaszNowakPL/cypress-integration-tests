import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

interface ReactQueryContextProps {
    client?: QueryClient;
}

export const ReactQueryContext: React.FC<ReactQueryContextProps> = ({children, client = queryClient}) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
