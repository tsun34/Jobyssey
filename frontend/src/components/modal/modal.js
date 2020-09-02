import React from 'react';
import '../../css/modal.css';
import SignInContainer from '../sign_in/sign_in_container';
import SignUpContainer from '../sign_up/sign_up_container';
import JobIndexItemContainer from '../job_index/job_index_container'
import LandingCreateJobContainer from '../landing_page/landing_create_job_container';
import '../../css/create_job.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { modal } = this.props.modal ?? {};
        if(!modal) {
            return null;
        }
        let modalContent, modelHeaderText, modalHeaderTextClassName;
        switch (modal) {
            case 'sign_in':
                modalContent = <SignInContainer />;
                modelHeaderText = 'Log in';
                modalHeaderTextClassName = null;
                break;
            case 'sign_up':
                modalContent = <SignUpContainer />;
                modelHeaderText = 'Sign up';
                modalHeaderTextClassName = null;
                break;
            case 'job_index_item':
                modalContent = <JobIndexItemContainer />;
                modelHeaderText = '';
                modalHeaderTextClassName = null;
                break;
            case 'create_job':
                modalContent = < LandingCreateJobContainer />;
                modelHeaderText = 'Add a Job';
                modalHeaderTextClassName = "create-job-header-text";
                break;
            default:
                modalContent = null;
                modelHeaderText = '';
                modalHeaderTextClassName = null;
                break;
        }
        return (
            <div className="modal-open-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <h3 className={modalHeaderTextClassName != null ? modalHeaderTextClassName : "sign-header-text"}>{modelHeaderText}</h3>
                        <button className="close-button" onClick={this.props.closeModal}>&times;</button>
                    </div>
                    {modalContent}
                </div>
            </div>
        );
    }
}

export default Modal;
