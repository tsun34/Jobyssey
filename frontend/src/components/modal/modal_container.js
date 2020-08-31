import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal } from '../../actions/modal_actions';

const mstp = ({ui}) => {
    return {
        modal: ui.modal,
    };
};

const mdtp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mstp, mdtp)(Modal);