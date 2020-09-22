import { connect } from 'react-redux';
import LandingColumn from './landing_column';
import { openModal } from '../../actions/modal_actions';
// import { STATES } from 'mongoose';
import { fetchUserJobs } from '../../actions/job_actions'

const mstp = (state) => {
    return {
        // jobs: state.entities.jobs,
        currentUserId: state.session.id,
        
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        // fetchUserJobs: () => dispatch(fetchUserJobs(params.userId)),
    };
};

export default connect(mstp, mdtp)(LandingColumn);