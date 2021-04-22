import React, {ReactElement} from "react";
import {createMemoryHistory} from "history";
import {Route, Router} from "react-router";
import {render} from "@testing-library/react";
import {QueryClient} from "react-query/core";
import {ReactQueryContext} from "../../../src/context/ReactQueryContext/ReactQueryContext";
import {ChakraProvider} from "@chakra-ui/react";

interface RouterConfiguration {
    entries?: string[]
    path?: string
}

interface Configuration {
    router?: RouterConfiguration
    reactQuery?: boolean
    chakra?: boolean
}

export const renderWithContexts = (ui: ReactElement, config: Configuration) => {
    let history;
    let component = ui;

    if(config?.reactQuery) {
        component = wrapWithReactQuery(component)
    }

    if(config?.chakra) {
        component = wrapWithChakraContext(component)
    }

    if(config?.router) {
        const uiWithHistory = wrapWithRouter(component, config.router);
        component = uiWithHistory.component;
        history = uiWithHistory.history;
    }

    const renderResult = render(component);
    return {...renderResult, history}
};

const wrapWithRouter = (ui: ReactElement, config: RouterConfiguration) => {
    let component = ui;

    const {entries = [], path} = config;

    if(path) {
        component = <Route path={path}>{component}</Route>;
    }

    const history = createMemoryHistory({initialEntries: entries});
    component = <Router history={history}>{component}</Router>;

    return {component, history}
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