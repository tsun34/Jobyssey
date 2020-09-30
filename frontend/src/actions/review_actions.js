import { getCompanyReviews, createReview, deleteReview, editReview } from '../util/review_api_util';

export const RECEIVE_COMPANY_REVIEWS = "RECEIVE_COMPANY_REVIEWS";
export const RECEIVE_NEW_REVIEW = "RECEIVE_NEW_JOB";
export const REMOVE_REVIEW = 'REMOVE_REVIEW'
export const EDIT_REVIEW = 'EDIT_REVIEW'

export const receiveCompanyReviews = reviews => ({
    type: RECEIVE_COMPANY_REVIEWS,
    reviews
});

export const receiveNewReview = review => ({
    type: RECEIVE_NEW_REVIEW,
    review
  })

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const editExistingReview = review => ({
  type: EDIT_REVIEW,
  review
});


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

export const removeUserReview = review => dispatch => (
  deleteReview(review)
    .then(() => dispatch(removeReview(review)))
    .catch(err => console.log(err))
)

export const editUserReview = review => dispatch => (
  editReview(review)
    .then(() => dispatch(editExistingReview(review)))
    .catch(err => console.log(err))
)