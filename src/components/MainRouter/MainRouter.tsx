import React from 'react';
import {Switch} from 'react-router';
import {Route} from 'react-router-dom';
import {ROUTES} from '../../utils/routes';
import {Suspense} from 'react';
import {Spinner} from '../Spinner/Spinner';

const NotFoundView = React.lazy(() => import('../../views/NotFoundView/NotFoundView'));
const HomePageView = React.lazy(() => import('../../views/HomePage/HomePageView'));
const CountriesListView = React.lazy(() => import('../../views/CountriesListView/CountriesListView'));
const AirportsListView = React.lazy(() => import('../../views/AirportsListView/AirportsListView'));
const NewAirportView = React.lazy(() => import('../../views/NewAirportView/NewAirportView'));

export const MainRouter: React.FC = () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Switch>
                <Route path={'/'} exact>
                    <HomePageView />
                </Route>
                <Route path={ROUTES.AIRPORTS_LIST}>
                    <AirportsListView />
                </Route>
                <Route path={ROUTES.COUNTRIES_LIST}>
                    <CountriesListView />
                </Route>
                <Route path={ROUTES.ADD_AIRPORT}>
                    <NewAirportView />
                </Route>
                <Route>
                    <NotFoundView />
                </Route>
            </Switch>
        </Suspense>
    );
};
