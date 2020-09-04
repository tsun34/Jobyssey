<<<<<<< HEAD
<<<<<<< HEAD
import { RECEIVE_COMPANY_REVIEWS, RECEIVE_NEW_REVIEW } from '../actions/review_actions';
=======
import { RECEIVE_COMPANY_REVIEWS } from '../actions/review_actions';
>>>>>>> review page initial layout
=======
import { RECEIVE_COMPANY_REVIEWS, RECEIVE_NEW_REVIEW } from '../actions/review_actions';
>>>>>>> review page complete

const companiesReducer = (state = { all: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_COMPANY_REVIEWS:
        newState.all = action.reviews.data;
        return newState;
<<<<<<< HEAD
<<<<<<< HEAD
      case RECEIVE_NEW_REVIEW:
        newState.all = [...newState.all, action.review.data];
        return newState;
=======
>>>>>>> review page initial layout
=======
      case RECEIVE_NEW_REVIEW:
        newState.all = [...newState.all, action.review.data];
        return newState;
>>>>>>> review page complete
      default:
        return state;
    }
  };
  
  export default companiesReducer;