import React from 'react';
import { AuthRoute} from './util/route_util';
import { Switch } from 'react-router-dom';
import GreetingContainer from './components/greeting_container'
import ModalContainer from './components/modal_container';
// import NavBarContainer from './nav/navbar_container';

import HomePage from './components/homePage/home_page';

const App = () => (
  <div className='slant-display'>
    <Switch>
      <AuthRoute exach path="/home" component={GreetingContainer} />
      {/* <AuthRoute exach path="/home" component={LandingPage} /> */}
      <AuthRoute exact path="/" component={HomePage} />
    </Switch>
    <ModalContainer />
  </div>
);

export default App;