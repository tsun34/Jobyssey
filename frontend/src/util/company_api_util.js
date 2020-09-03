import axios from 'axios';

export const getCompany = companyId => {
  return axios.get(`/api/companies/${companyId}`);
};

export const getCompanies = () => {
  return axios.get(`/api/companies/`);
};

export const getSearchCompanies = data => {
  return axios.post(`/api/companies/search-companies/`, data);
};