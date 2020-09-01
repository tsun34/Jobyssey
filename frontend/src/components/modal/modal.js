import React from 'react';
import '../../css/modal.css';
import SignInContainer from '../sign_in/sign_in_container';
import SignUpContainer from '../sign_up/sign_up_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { modal } = this.props.modal ?? {};
        if(!modal) {
            return null;
        }
        let modalContent, modelHeaderText;
        switch (modal) {
            case 'sign_in':
                modalContent = <SignInContainer />;
                modelHeaderText = 'Log in';
                break;
            case 'sign_up':
                modalContent = <SignUpContainer />;
                modelHeaderText = 'Sign up';
                break;
            default:
                modalContent = null;
                modelHeaderText = '';
                break;
        }
        return (
            <div className="modal-open-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <h3 className="sign-header-text">{modelHeaderText}</h3>
                        <button className="close-button" onClick={this.props.closeModal}>&times;</button>
                    </div>
                    {modalContent}
                </div>
            </div>
        );
    }
}

export default Modal;