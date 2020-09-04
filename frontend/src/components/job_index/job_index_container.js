import { connect } from 'react-redux';
import JobIndexItem from './job_index_item';
import { removeUserJob } from '../../actions/job_actions'; 
import { closeModal } from '../../actions/modal_actions';

const mstp = (state) => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        removeUserJob: (id) => dispatch(removeUserJob(id)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mstp, mdtp)(JobIndexItem);