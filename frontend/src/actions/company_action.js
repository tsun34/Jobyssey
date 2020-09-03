import { getCompanies, getSearchCompanies } from '../util/company_api_util.js';

export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_SEARCH_COMPANIES = "RECEIVE_SEARCH_COMPANIES";

export const receiveCompanies = companies => ({
    type: RECEIVE_COMPANIES,
    companies
});

export const receiveSearchCompanies = companies => ({
    type: RECEIVE_SEARCH_COMPANIES,
    companies
});

export const fetchCompanies = () => dispatch => (
    getCompanies()
      .then(companies => dispatch(receiveCompanies(companies)))
      .catch(err => console.log(err))
);

export const fetchSearchCompanies = data => dispatch => (
    getSearchCompanies(data)
      .then(companies => dispatch(receiveSearchCompanies(companies)))
      .catch(err => console.log(err))
);
