import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';
import session from './session_reducer';

const rootReducer = combineReducers({
    session,
    ui: uiReducer,
});

export default rootReducer;