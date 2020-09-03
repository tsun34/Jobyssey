import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';


const mstp = (state) => {
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mdtp = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),

    };
};

export default connect(mstp, mdtp)(Greeting);
