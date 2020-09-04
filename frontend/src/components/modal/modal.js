import React from 'react';
import '../../css/modal.css';
import SignInContainer from '../sign_in/sign_in_container';
import SignUpContainer from '../sign_up/sign_up_container';
import JobIndexItemContainer from '../job_index/job_index_container'
import LandingCreateJobContainer from '../landing_page/landing_create_job_container';
import LandingEditJobContainer from '../landing_page/landing_edit_job_container';
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
        let modalContent, modelHeaderText, modalHeaderTextClassName, width;
        switch (modal) {
            case 'sign_in':
                modalContent = <SignInContainer />;
                modelHeaderText = 'Log in';
                modalHeaderTextClassName = null;
                width = "500px";
                break;
            case 'sign_up':
                modalContent = <SignUpContainer />;
                modelHeaderText = 'Sign up';
                modalHeaderTextClassName = null;
                width = "500px";
                break;
            case 'job_index_item':
                modalContent = <JobIndexItemContainer job={this.props.modal.modalProps}/>;
                modelHeaderText = 'Application Details';
                modalHeaderTextClassName = null;
                width = "70%";
                break;
            case 'create_job':
                modalContent = < LandingCreateJobContainer />;
                modelHeaderText = 'Add an Application';
                modalHeaderTextClassName = "create-job-header-text";
                width = "70%";
                break;
            case 'edit_job':
                modalContent = < LandingEditJobContainer currentJob={this.props.modal.modalProps} />;
                modelHeaderText = 'Update an Application';
                modalHeaderTextClassName = null;
                width = "70%";
                break;
            default:
                modalContent = null;
                modelHeaderText = '';
                modalHeaderTextClassName = null;
                break;
        }
        return (
            <div className="modal-open-background">
                <div className="modal-container" style={{width: width}}>
                    <button className="close-button" onClick={this.props.closeModal}>&times;</button>
                    <h3 className="modal-header-text">{modelHeaderText}</h3>
                    {modalContent}
                </div>
            </div>
        );
    }
}

export default Modal;
