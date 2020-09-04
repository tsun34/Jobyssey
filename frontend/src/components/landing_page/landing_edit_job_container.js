import { connect } from 'react-redux';
import LandingEditJob from './landing_edit_job';
import { editUserJob } from '../../actions/job_actions';
import { closeModal } from '../../actions/modal_actions';
import { fetchUserJobs } from '../../actions/job_actions';

const mstp = (state, ownProps) => {
    return {
        currentUserId: state.session.user.id,
    };
};

const mdtp = dispatch => {
    return {
        editUserJob: data => dispatch(editUserJob(data)),
        closeModal: () => dispatch(closeModal()),
        fetchUserJobs: userId => dispatch(fetchUserJobs(userId)),
    };
};

export default connect(mstp, mdtp)(LandingEditJob);