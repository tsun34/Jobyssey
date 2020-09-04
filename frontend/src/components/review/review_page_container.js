import { connect } from 'react-redux';
import ReviewPage from './review_page';
<<<<<<< HEAD
<<<<<<< HEAD
import { fetchCompanyReviews, postReview } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';

const mstp = ({reviews, companies, session}) => {
<<<<<<< HEAD
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
        currentUserId: session.user.id,
=======
import { fetchCompanyReviews } from '../../actions/review_actions';
=======
import { fetchCompanyReviews, postReview } from '../../actions/review_actions';
>>>>>>> review page complete
import { fetchCompany } from '../../actions/company_action';

const mstp = ({reviews, companies}) => {
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
>>>>>>> review page initial layout
=======
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
        currentUserId: session.user.id,
>>>>>>> review page everything
    };
};

const mdtp = dispatch => {
    return {
        fetchCompanyReviews: companyId => dispatch(fetchCompanyReviews(companyId)),
<<<<<<< HEAD
<<<<<<< HEAD
        postReview: data => dispatch(postReview(data)),
=======
>>>>>>> review page initial layout
=======
        postReview: data => dispatch(postReview(data)),
>>>>>>> review page complete
        fetchCompany: companyId => dispatch(fetchCompany(companyId)),
    };
};

export default connect(mstp, mdtp)(ReviewPage);