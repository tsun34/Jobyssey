import { connect } from 'react-redux';
import SignUp from './sign_up';
import { openModal, closeModal } from '../../actions/modal_actions';
import { signup, receiveErrors } from '../../actions/session_actions';


const mstp = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        signup: user => dispatch(signup(user)),
        receiveErrors: (err) => dispatch(receiveErrors(err))
    };
};

export default connect(mstp, mdtp)(SignUp);