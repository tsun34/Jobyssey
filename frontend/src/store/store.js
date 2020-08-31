import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import logger from 'redux-logger';

// import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => (
  createStore(
    // rootReducer,
    ()=>{},
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);
=======
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => createStore(RootReducer, preloadedState, applyMiddleware(thunk));
>>>>>>> 2f2002f98d632dbf5fce37e272b43dec02dab2fc

export default configureStore;
