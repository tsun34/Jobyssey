import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './landing_page';

const App = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
    </Switch>
);

export default App;