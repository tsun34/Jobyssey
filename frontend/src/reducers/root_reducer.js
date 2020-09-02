import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';
import session from './session_reducer';
import errorReducer from './errors_reducer';
import jobReducer from './jobs_reducer';


const rootReducer = combineReducers({
    session,
    jobs: jobReducer,
    ui: uiReducer,
    errors: errorReducer,
    jobs: JobsReducer
});

export default rootReducer;