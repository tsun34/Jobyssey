import React from 'react';

import { AuthRoute, ProtectedRoute} from './util/route_util';
import { Switch, Route } from 'react-router-dom';
import GreetingContainer from './components/greeting/greeting_container'

import ModalContainer from './components/modal/modal_container';
import LangindPage from './components/landing_page/landing_page';
import './css/page.css';
// import NavBarContainer from './nav/navbar_container';

import HomePageContainer from './components/homePage/home_page_container';

const App = () => (
  <div className='slant-display'>
    <Switch>

      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exach path="/home" component={LandingPage} />
      
    </Switch>
    <ModalContainer />
  </div>
);

export default App;