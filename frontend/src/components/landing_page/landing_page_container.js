import { connect } from 'react-redux';
import LandingPage from './landing_page';
import { openModal } from '../../actions/modal_actions';
import { fetchUserJobs } from '../../actions/job_actions';  

const mstp = ({session, jobs}) => {
    return {
        currentUserId: session.user.id,
        jobs,
    };
};

const mdtp = dispatch => {
    return {
        fetchUserJobs: userId => dispatch(fetchUserJobs(userId)),
    };
};

export default connect(mstp, mdtp)(LandingPage);