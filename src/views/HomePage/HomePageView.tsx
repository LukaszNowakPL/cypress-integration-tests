import React from 'react';
import {Code, ListItem, Stack, UnorderedList, Text} from '@chakra-ui/react';

export const HomePageView: React.FC = () => {
    return (
        <Stack spacing={3}>
            <Text>
                This application is build to compare integration tests using <Code>Cypress</Code>, <Code>Playwright</Code> and <Code>Jest + testing-library</Code>{' '}
                libraries.
            </Text>
            <Text>
                The main reason for such comparision is that <Code>Jest + testing-library</Code> approach for bigger components integrating
                few libraries (i.e. <Code>Formik</Code>, <Code>React-query</Code>) is time consuming.
            </Text>
            <Text>This is an example application made with my best practices and several advanced libraries:</Text>
            <UnorderedList>
                <ListItem>
                    <Code>React router</Code> for routing
                </ListItem>
                <ListItem>
                    <Code>React query</Code> for handling api fetches
                </ListItem>
                <ListItem>
                    <Code>Mirage JS</Code> for serving in memory database
                </ListItem>
                <ListItem>
                    <Code>Formik</Code> for handling forms
                </ListItem>
                <ListItem>
                    <Code>Chakra-ui</Code> for GUI
                </ListItem>
                <ListItem>
                    <Code>Jest</Code> for integration tests
                </ListItem>
                <ListItem>
                    <Code>testing-library</Code> for handling ui elements on Jest testing
                </ListItem>
                <ListItem>
                    <Code>MSW</Code> for mocking api calls on test envs
                </ListItem>
                <ListItem>
                    <Code>Cypress</Code> for other approach of integration tests
                </ListItem>
                <ListItem>
                    <Code>Playwright</Code> for yet another approach of bigger components testing
                </ListItem>
                <ListItem>
                    <Code>Mockiavelli</Code> for mocking api calls on Playwright tests
                </ListItem>
            </UnorderedList>
            <Text>
                Application is build using <Code>Create React App</Code>. It also consumes <Code>React hooks</Code> approach as well as{' '}
                <Code>lazy loading</Code> (still experimental feature).
            </Text>
        </Stack>
    );
};

export default HomePageView;
