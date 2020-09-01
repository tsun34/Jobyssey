import { connect } from 'react-redux';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';


const mstp = (statue) => {
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mdtp = dispatch => {
    return {
        logout,
        openModal: modal => dispatch(openModal(modal)),

    };
};

export default connect(mstp, mdtp)(Greeting);
