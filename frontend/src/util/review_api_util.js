import axios from 'axios';

export const getCompanyReviews = companyId => {
  return axios.get(`/api/reviews/${companyId}`);
};

export const createReview = data => {
  return axios.post(`/api/reviews/${data.companyId}`, data);
<<<<<<< HEAD
}
=======
}
>>>>>>> review page complete
