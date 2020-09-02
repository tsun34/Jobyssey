import { connect } from 'react-redux';
import LandingCompany from './landing_company';
import { openModal } from '../../actions/modal_actions';
// import { STATES } from 'mongoose';
import {fetchUserJobs} from '../../actions/job_actions'

const mstp = (state) => {
    // console.log(state)
    return {
        // jobs: state.entities.jobs,

    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        // fetchUserJobs: id => dispatch(fetchUserJobs(id)),
    };
};

export default connect(mstp, mdtp)(LandingCompany);