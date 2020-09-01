import React from 'react';
import { AuthRoute, ProtectedRoute} from './util/route_util';
import { Switch } from 'react-router-dom';
import GreetingContainer from './components/greeting/greeting_container'
import ModalContainer from './components/modal/modal_container';
// import NavBarContainer from './nav/navbar_container';

import HomePageContainer from './components/homePage/home_page_container';

const App = () => (
  <div className='slant-display'>
    <Switch>
      <AuthRoute exach path="/home" component={GreetingContainer} />
      <AuthRoute exact path="/" component={HomePageContainer} />
    </Switch>
    <ModalContainer />
  </div>
);

export default App;