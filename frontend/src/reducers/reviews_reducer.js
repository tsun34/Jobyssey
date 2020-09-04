import { RECEIVE_COMPANY_REVIEWS, RECEIVE_NEW_REVIEW } from '../actions/review_actions';

const companiesReducer = (state = { all: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_COMPANY_REVIEWS:
        newState.all = action.reviews.data;
        return newState;
      case RECEIVE_NEW_REVIEW:
        newState.all = [...newState.all, action.review.data];
        return newState;
      default:
        return state;
    }
  };
  
  export default companiesReducer;