import axios from 'axios';

export const getCompanyReviews = companyId => {
  return axios.get(`/api/reviews/${companyId}`);
};

export const createReview = data => {
  return axios.post(`/api/reviews/${data.companyId}`, data);
};

export const deleteReview = id => {
  return axios.delete(`/api/reviews/${id}`)
}

export const editReview = review => {
  return axios.post(`/api/reviews/update/${review._id}`, review)
}