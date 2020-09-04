import { connect } from 'react-redux';
import LandingCreateJob from './landing_create_job';
import { composeJob, fetchUserJobs } from '../../actions/job_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = ({session}) => {
    return {
        currentUserId: session.user.id,
    };
};

const mdtp = dispatch => {
    return {
        composeJob: data => dispatch(composeJob(data)),
        closeModal: () => dispatch(closeModal()), 
        fetchUserJobs: userId => dispatch(fetchUserJobs(userId)),
    };
};

export default connect(mstp, mdtp)(LandingCreateJob);