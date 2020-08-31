import { combineReducers } from 'redux';
<<<<<<< HEAD

const rootReducer = combineReducers({

=======
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
>>>>>>> 2f2002f98d632dbf5fce37e272b43dec02dab2fc
});

export default rootReducer;