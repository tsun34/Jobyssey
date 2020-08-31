import React from 'react';
import { AuthRoute} from './util/route_util';
import { Switch } from 'react-router-dom';
// import NavBarContainer from './nav/navbar_container';

import HomePage from './components/homePage/home_page';

const App = () => (

  <div>
    <AuthRoute exact path="/" component={HomePage} />
  </div>
);

export default App;