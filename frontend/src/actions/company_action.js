import { getCompany, getCompanies, getSearchCompanies } from '../util/company_api_util.js';

export const RECEIVE_COMPANY = "RECEIVE_COMPANY";
export const RECEIVE_COMPANIES = "RECEIVE_COMPANIES";
export const RECEIVE_SEARCH_COMPANIES = "RECEIVE_SEARCH_COMPANIES";

export const receiveCompany = company => ({
    type: RECEIVE_COMPANY,
    company
});

export const receiveCompanies = companies => ({
    type: RECEIVE_COMPANIES,
    companies
});

export const receiveSearchCompanies = companies => ({
    type: RECEIVE_SEARCH_COMPANIES,
    companies
});

export const fetchCompany = companyId => dispatch => (
    getCompany(companyId)
      .then(company => dispatch(receiveCompany(company)))
      .catch(err => console.log(err))
);

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
