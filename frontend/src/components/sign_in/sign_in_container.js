import { connect } from 'react-redux';
import SignIn from './sign_in';
import { openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mstp = (state) => {
    return {
        user: {
            email: '',
            password: ''
        },
        errors: state.errors.session
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        login: user => dispatch(login(user))
    };
};

export default connect(mstp, mdtp)(SignIn);
