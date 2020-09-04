import React from 'react';
import '../../css/job_index_item.css'

class JobIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
    }

    onClick() {
        this.props.removeUserJob(this.props.job._id).then(this.props.closeModal())
    }

    onClickEdit(currentJob){
        this.props.openModalWithProps('edit_job', currentJob);
    }

    render() {
        const job = this.props.job
        return (
            <div className='job-index'>
                <div className='job-index-top'>
                    
                    <ul className='job-index-top-left'>
                        <li className='li-details'>
                            <p className='li-title'>Company Name:</p>
                            <div className='li-field'>{job.company_name}</div>
                        </li >
                        <li className='li-details'>
                            <p className='li-title'>Position Name:</p>
                            <div className='li-field'>{job.position_name}</div>
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Stage:</p>
                            <div className='li-field'>{job.stage}</div>
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Application Link:</p>
                            <div className='li-field'>{job.application_link}</div>
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Salary:</p>
                            <div className='li-field'>{job.salary}</div>
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Location:</p>
                            <div className='li-field'>{job.location}</div>
                        </li>
                    </ul>
                    <ul className='job-index-top-right'>
                        <li className='li-details'>
                            <p className='li-title'>Deadline:</p>
                            <div className='li-field'>{job.deadline}</div>
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Applied On:</p>
                            <div className='li-field'>{job.date_applied}</div>
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Interview:</p>
                            <div className='li-field'>{job.interview_date}</div>
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Heard back:</p>
                            <div className='li-field'>{job.decision_date}</div>
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Decision:</p>
                            <div className='li-field'>{job.decision}</div>
                        </li>
                    </ul>
                </div>
                <ul className='job-index-bottom'>
                    <li className='li-textbox'>
                        <p className='li-title'>Notes:</p>
                        <div className='li-textfield'>{job.notes}</div>
                    </li>
                    <li className='li-textbox'>
                        <p className='li-title'>Network Contacts:</p>
                        <div className='li-textfield'>{job.networking_contacts}</div>
                    </li>
                    <li className='li-textbox'>
                        <p className='li-title'>Study Prep:</p>
                        <div className='li-textfield'>{job.studying_preparation}</div>
                    </li>
                </ul>
                <div className='li-links'>
                    <button className='li-button' onClick={() => this.onClickEdit(job)}>Edit Application</button>
                    <button className="li-button" onClick={this.onClick}>Delete Application</button>
                </div>
            </div>
        )
    }
}

export default JobIndexItem;