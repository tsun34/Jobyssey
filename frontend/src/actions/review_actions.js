import { getCompanyReviews } from '../util/review_api_util';

export const RECEIVE_COMPANY_REVIEWS = "RECEIVE_COMPANY_REVIEWS";

export const receiveCompanyReviews = reviews => ({
    type: RECEIVE_COMPANY_REVIEWS,
    reviews
});

export const fetchCompanyReviews = companyId => dispatch => (
    getCompanyReviews(companyId)
      .then(reviews => dispatch(receiveCompanyReviews(reviews)))
      .catch(err => console.log(err))
);