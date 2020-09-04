import { getCompanyReviews, createReview } from '../util/review_api_util';

export const RECEIVE_COMPANY_REVIEWS = "RECEIVE_COMPANY_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_JOB";

export const receiveCompanyReviews = reviews => ({
    type: RECEIVE_COMPANY_REVIEWS,
    reviews
});

export const receiveNewReview = review => ({
    type: RECEIVE_NEW_REVIEW,
    review
  })

export const fetchCompanyReviews = companyId => dispatch => (
    getCompanyReviews(companyId)
      .then(reviews => dispatch(receiveCompanyReviews(reviews)))
      .catch(err => console.log(err))
);

export const postReview = data => dispatch => (
    createReview(data)
      .then(reivew => dispatch(receiveNewReview(reivew)))
      .catch(err => console.log(err))
  );