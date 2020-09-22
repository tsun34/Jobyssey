import { connect } from 'react-redux';
import SignIn from './sign_in';
import { openModal, closeModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';
import {receiveErrors} from '../../actions/session_actions';

const mstp = (state) => {
    return {
        errors: state.errors.session
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        login: user => dispatch(login(user)),
        receiveErrors: (errors) => dispatch(receiveErrors(errors))

    };
};

export default connect(mstp, mdtp)(SignIn);
