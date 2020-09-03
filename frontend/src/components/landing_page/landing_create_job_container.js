import { connect } from 'react-redux';
import LandingCreateJob from './landing_create_job';
import { composeJob } from '../../actions/job_actions';
import { closeModal } from '../../actions/modal_actions';

const mstp = state => {
    return {
    };
};

const mdtp = dispatch => {
    return {
        composeJob: data => dispatch(composeJob(data)),
        closeModal: () => dispatch(closeModal()), 
    };
};

export default connect(mstp, mdtp)(LandingCreateJob);