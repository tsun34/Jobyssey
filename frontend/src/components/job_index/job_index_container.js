import { connect } from 'react-redux';
import JobIndexItem from './job_index_item';
import { openModal } from '../../actions/modal_actions';

const mstp = (state) => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(JobIndexItem);