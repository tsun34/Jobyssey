import { combineReducers } from 'redux';
import uiReducer from './ui_reducer';
import modalReducer from './modal_reducer';
import session from './session_reducer';
import errorReducer from './errors_reducer';
import jobsReducer from './jobs_reducer';
import companiesReducer from './companies_reducer';
import reviewsReducer from './reviews_reducer';


const rootReducer = combineReducers({
    session,
    jobs: jobsReducer,
    companies: companiesReducer,
    reviews: reviewsReducer,
    ui: uiReducer,
    errors: errorReducer,
});

export default rootReducer;