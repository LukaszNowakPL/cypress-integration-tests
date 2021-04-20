import React from 'react';
import {Switch} from "react-router";
import {Route} from 'react-router-dom';
import {ROUTES} from "../../utils/routes";
import {HomePageView} from "../../views/HomePage/HomePageView";
import {NotFoundView} from '../../views/NotFoundView/NotFoundView';
import {CountriesListView} from "../../views/CountriesListView/CountriesListView";

export const MainRouter: React.FC = () => {
    return (
        <Switch>
            <Route path={'/'} exact>
                <HomePageView />
            </Route>
            <Route path={ROUTES.COUNTRIES_LIST}>
                <CountriesListView />
            </Route>
            <Route>
                <NotFoundView />
            </Route>
        </Switch>
    );
};
