import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import { fetchUserJobs } from './actions/job_actions';

const Root = ({ store}) => (
  <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  let store; 
  
  if (localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = { session: { isAuthenticated: true, user: decodedUser} };
    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = '/';
    }
  } else {
    store = configureStore({});
  }
  
  //test
  window.store = store
  window.dispatch = store.dispatch
  window.getstate = store.getState
  window.fetchUserJobs = fetchUserJobs
  

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});


