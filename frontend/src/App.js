import React from 'react';

import { AuthRoute, ProtectedRoute} from './util/route_util';
import { Switch, Route } from 'react-router-dom';

import ModalContainer from './components/modal/modal_container';
import LandingPageContainer from './components/landing_page/landing_page_container';
import ExplorePage from './components/explore_page/explore_page';
import './css/page.css';
import SearchPage from "./components/search_test/search";
// import NavBarContainer from './nav/navbar_container';

import HomePageContainer from './components/homePage/home_page_container';
import VizContainer from './components/progress/vizgraph_container';

const App = () => (
  <div className='slant-display'>
    <Switch>
      <Route path="/search" component={SearchPage} />
      <AuthRoute exact path="/" component={HomePageContainer} />
      <ProtectedRoute exact path="/home" component={LandingPageContainer} />
      <ProtectedRoute exact path="/myprogress" component={VizContainer} />
      <Route exach path="/explore" component={ExplorePage} />
    </Switch>
    <ModalContainer />
  </div>
);

export default App;