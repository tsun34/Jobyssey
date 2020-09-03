import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { openModal } from '../../actions/modal_actions';
// import { STATES } from 'mongoose';
import {fetchUserJobs} from '../../actions/job_actions'

const mstp = (state) => {
    return {
        jobs: state.jobs,
        currentUserId: state.session.user.id
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        fetchUserJobs: id => dispatch(fetchUserJobs(id)),
    };
};

export default connect(mstp, mdtp)(LandingPage);