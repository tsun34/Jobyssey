import { connect } from 'react-redux';
import ReviewItem from './review_item';
import { fetchCompanyReviews, postReview, editUserReview, removeUserReview } from '../../actions/review_actions';
import { fetchCompany } from '../../actions/company_action';
import { openModal, closeModal, openModalWithProps } from '../../actions/modal_actions';


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
        editUserReview: (id) => dispatch(editUserReview(id)),
        removeUserReview: (id) => dispatch(removeUserReview(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal, modalProps) => dispatch(openModalWithProps(modal, modalProps)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mstp, mdtp)(ReviewItem);