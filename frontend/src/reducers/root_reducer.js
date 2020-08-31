import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
});

export default rootReducer;