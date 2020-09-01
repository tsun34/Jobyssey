import { connect } from 'react-redux';
import SignIn from './sign_in';
import { openModal } from '../../actions/modal_actions';

const mstp = (state) => {
    return {
        user: {
            email: '',
            password: ''
        },
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(SignIn);
