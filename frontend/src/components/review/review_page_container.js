import { connect } from 'react-redux';
import ReviewPage from './review_page';
import { fetchCompanyReviews } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';

const mstp = ({reviews, companies}) => {
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
    };
};

const mdtp = dispatch => {
    return {
        fetchCompanyReviews: companyId => dispatch(fetchCompanyReviews(companyId)),
        fetchCompany: companyId => dispatch(fetchCompany(companyId)),
    };
};

export default connect(mstp, mdtp)(ReviewPage);