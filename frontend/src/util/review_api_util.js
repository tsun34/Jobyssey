import axios from 'axios';

export const getCompanyReviews = companyId => {
  return axios.get(`/api/reviews/${companyId}`);
};