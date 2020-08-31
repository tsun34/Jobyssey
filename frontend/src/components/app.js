import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page';

const App = () => (
    <div>
        <Switch>
            <Route exach path="/" component={LandingPage} />
            <Route exach path="/home/" component={LandingPage} />
        </Switch>
    </div>
);

export default App;