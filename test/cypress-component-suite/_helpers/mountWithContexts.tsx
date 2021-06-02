import React, {ReactElement} from "react";
import {Router, Route} from "react-router";
import { mount } from '@cypress/react'
import {QueryClient} from "react-query/core";
import {ReactQueryContext} from "../../../src/context/ReactQueryContext/ReactQueryContext";
import {ChakraProvider} from "@chakra-ui/react";
import {createBrowserHistory} from "history";

interface RouterConfiguration {
    entry?: string
    path?: string
}

interface Configuration {
    router?: RouterConfiguration
    reactQuery?: boolean
    chakra?: boolean
}

export const mountWithContexts = (ui: ReactElement, config: Configuration) => {
    let component = ui;

    if(config?.reactQuery) {
        component = wrapWithReactQuery(component)
    }

    if(config?.chakra) {
        component = wrapWithChakraContext(component)
    }

    if(config?.router) {
        component = wrapWithRouter(component, config.router);
    }

    const renderResult = mount(component);
    return {...renderResult}
};

const wrapWithRouter = (ui: ReactElement, config: RouterConfiguration) => {
    let component = ui;

    const {entry, path} = config;

    if(path) {
        component = <Route path={path}>{component}</Route>;
    }

    const history = createBrowserHistory();
    if(entry) {
        history.push(entry)
    }

    return <Router history={history}>{component}</Router>
};

const wrapWithReactQuery = (ui: ReactElement) => {
    const client = new QueryClient({
        defaultOptions: {
            queries: {
                retryDelay: 0
            }
        }
    });
    client.clear();
    return <ReactQueryContext client={client}>{ui}</ReactQueryContext>
};

const wrapWithChakraContext = (ui: ReactElement) => {
    return <ChakraProvider resetCSS>{ui}</ChakraProvider>
};