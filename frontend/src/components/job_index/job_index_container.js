import { connect } from 'react-redux';
import JobIndexItem from './job_index_item';
import { removeUserJob, editUserJob } from '../../actions/job_actions'; 
import { openModal, closeModal, openModalWithProps } from '../../actions/modal_actions';

const mstp = (state) => {
    return {

    };
};

const mdtp = dispatch => {
    return {
        removeUserJob: (id) => dispatch(removeUserJob(id)),
        editUserJob: (id) => dispatch(editUserJob(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        openModalWithProps: (modal, modalProps) => dispatch(openModalWithProps(modal, modalProps)),
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mstp, mdtp)(JobIndexItem);