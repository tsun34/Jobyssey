import React from 'react';

import { AuthRoute, ProtectedRoute} from './util/route_util';
import { Switch, Route } from 'react-router-dom';
import GreetingContainer from './components/greeting/greeting_container'

import ModalContainer from './components/modal/modal_container';
import LandingPageContainer from './components/landing_page/landing_page_container';
import ExplorePage from './components/explore_page/explore_page';
import './css/page.css';
// import NavBarContainer from './nav/navbar_container';

import HomePageContainer from './components/homePage/home_page_container';

const App = () => (
  <div className='slant-display'>
    <Switch>
      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exach path="/home" component={LandingPageContainer} />
      <Route exach path="/explore" component={ExplorePage} />
    </Switch>
    <ModalContainer />
  </div>
);

export default App;