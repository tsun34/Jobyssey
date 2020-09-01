import { connect } from 'react-redux';
import SignUp from './sign_up';
import { openModal } from '../../actions/modal_actions';
import { signup } from '../../actions/session_actions';


const mstp = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        signup: user => dispatch(signup(user))
    };
};

export default connect(mstp, mdtp)(SignUp);