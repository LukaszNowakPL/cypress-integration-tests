import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {getBaseName} from './App.helpers';
import {Box, ChakraProvider} from "@chakra-ui/react";
import {Header} from "../Header/Header";
import {MainRouter} from "../MainRouter/MainRouter";
import {Footer} from "../Footer/Footer";

export const App: React.FC = () => {
    const basename = getBaseName();

    return (
        <BrowserRouter basename={basename}>
            <ChakraProvider>
                <Box width={'80%'} mx={'auto'}>
                    <Header />
                    <MainRouter />
                    <Footer />
                </Box>
            </ChakraProvider>
        </BrowserRouter>
    );
};
