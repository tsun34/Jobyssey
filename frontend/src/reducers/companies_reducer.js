import { RECEIVE_COMPANY, RECEIVE_COMPANIES, RECEIVE_SEARCH_COMPANIES } from '../actions/company_action';

const companiesReducer = (state = { all: {}, show: {} }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_COMPANY:
        newState.show = action.company.data;
        return newState; 
      case RECEIVE_COMPANIES:
      case RECEIVE_SEARCH_COMPANIES:
        newState.all = action.companies.data;
        return newState; 
      default:
        return state;
    }
  };
  
  export default companiesReducer;