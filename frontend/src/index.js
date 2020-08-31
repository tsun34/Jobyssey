import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { HashRouter } from 'react-router-dom';
import App from './App'
// import Root from './components/root';
// import configureStore from './store/store';

const Root = ({ }) => (
  // <Provider store={ store }>
    <HashRouter>
      <App />
    </HashRouter>
  // </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
//   // const store = configureStore({});
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
=======
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore({});
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
>>>>>>> 2f2002f98d632dbf5fce37e272b43dec02dab2fc
