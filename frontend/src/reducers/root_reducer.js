import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';
import session from './session_reducer';
import errorReducer from './errors_reducer';


const rootReducer = combineReducers({
    session,
    ui: uiReducer,
    errors: errorReducer
});

export default rootReducer;