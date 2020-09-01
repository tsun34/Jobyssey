import React from 'react';
import { AuthRoute} from './util/route_util';
import { Switch } from 'react-router-dom';
import ModalContainer from './components/modal/modal_container';
import LangindPage from './components/landing_page/landing_page';
import './css/page.css';
// import NavBarContainer from './nav/navbar_container';

import HomePageContainer from './components/homePage/home_page_container';

const App = () => (
  <div className='slant-display'>
    <Switch>
      <AuthRoute exach path="/home" component={LangindPage} />
      <AuthRoute exact path="/" component={HomePageContainer} />
    </Switch>
    <ModalContainer />
  </div>
);

export default App;