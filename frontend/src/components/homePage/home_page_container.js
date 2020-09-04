import { connect } from 'react-redux';
import HomePage from './home_page';
import { openModal } from '../../actions/modal_actions';
import { login } from '../../actions/session_actions';

const mstp = (statue) => {
    return {
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
        login: user => dispatch(login(user))
    };
};

export default connect(mstp, mdtp)(HomePage);