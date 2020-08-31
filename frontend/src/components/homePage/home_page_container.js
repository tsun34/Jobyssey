import { connect } from 'react-redux';
import HomePage from './home_page';
import { openModal } from '../../actions/modal_actions';

const mstp = (statue) => {
    return {
    };
};

const mdtp = dispatch => {
    return {
        openModal: modal => dispatch(openModal(modal)),
    };
};

export default connect(mstp, mdtp)(HomePage);