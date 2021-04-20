import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {Box, ChakraProvider} from '@chakra-ui/react';
import {Header} from '../Header/Header';
import {MainRouter} from '../MainRouter/MainRouter';
import {Footer} from '../Footer/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';

export const App: React.FC = () => {
    const basename = getBaseName();
    // @ToDo: make it external
    const queryClient = new QueryClient();

    return (
        <BrowserRouter basename={basename}>
            <ChakraProvider>
                <QueryClientProvider client={queryClient}>
                    <Box width={'80%'} mx={'auto'}>
                        <Header />
                        <MainRouter />
                        <Footer />
                    </Box>
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    );
};
