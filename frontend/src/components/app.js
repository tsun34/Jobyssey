import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './landing_page';
import ModalContainer from './modal_container';

const App = () => (
    <div>
        <Switch>
            <Route exach path="/" component={LandingPage} />
            <Route exach path="/home/" component={LandingPage} />
        </Switch>
        <ModalContainer />
    </div>
);

export default App;