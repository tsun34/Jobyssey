import { connect } from 'react-redux';
import ReviewPage from './review_page';
<<<<<<< HEAD
import { fetchCompanyReviews, postReview } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';

const mstp = ({reviews, companies, session}) => {
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
        currentUserId: session.user.id,
=======
import { fetchCompanyReviews } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';

const mstp = ({reviews, companies}) => {
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
>>>>>>> review page initial layout
    };
};

const mdtp = dispatch => {
    return {
        fetchCompanyReviews: companyId => dispatch(fetchCompanyReviews(companyId)),
<<<<<<< HEAD
        postReview: data => dispatch(postReview(data)),
=======
>>>>>>> review page initial layout
        fetchCompany: companyId => dispatch(fetchCompany(companyId)),
    };
};

export default connect(mstp, mdtp)(ReviewPage);