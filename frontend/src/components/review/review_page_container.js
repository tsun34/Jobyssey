import { connect } from 'react-redux';
import ReviewPage from './review_page';
import { fetchCompanyReviews, postReview } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';
import { openModal, openModalWithProps } from '../../actions/modal_actions';

const mstp = ({reviews, companies, session}) => {
    return {
        reviews: Object.values(reviews.all) ?? [],
        company: companies.show,
        currentUserId: session.user.id,
    };
};

const mdtp = dispatch => {
    return {
        fetchCompanyReviews: companyId => dispatch(fetchCompanyReviews(companyId)),
        postReview: data => dispatch(postReview(data)),
        fetchCompany: companyId => dispatch(fetchCompany(companyId)),
        openModal: modal => dispatch(openModal(modal)),
        openModalWithProps: (modal, modalProps) => dispatch(openModalWithProps(modal, modalProps)),
    };
};

export default connect(mstp, mdtp)(ReviewPage);