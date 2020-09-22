import { connect } from 'react-redux';
import LandingCompany from './landing_company';
import { openModal, openModalWithProps } from '../../actions/modal_actions';
// import { STATES } from 'mongoose';
import {fetchUserJobs} from '../../actions/job_actions'

const mstp = (state) => {
    return {
        // jobs: state.entities.jobs,
        // currentUserId: state.entities.user.id
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        openModalWithProps: (modal, modalProps) => dispatch(openModalWithProps(modal, modalProps)),
        fetchUserJobs: id => dispatch(fetchUserJobs(id)),
    };
};

export default connect(mstp, mdtp)(LandingCompany);