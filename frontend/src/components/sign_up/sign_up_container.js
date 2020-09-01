import { connect } from 'react-redux';
import SignUp from './sign_up';
import { openModal } from '../../actions/modal_actions';

const mstp = (state) => {
    return {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        },
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(SignUp);