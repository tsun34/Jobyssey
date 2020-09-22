import React from 'react';
import '../../css/landing-page.css';
import '../../css/sign_up_log_in.css';
import '../../css/create_job.css';

class LandingCreateJob extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            position: '',
            stage: '',
            applicationLink: '',
            // salary: '',
            // location: '',
            // deadline: '',
            // dateApplied: '',
            // interviewDate: '',
            // decisionDate: '',
            // decision: '',
            // notes: '',
            // networkContacts: '',
            // studyPrep: ''
            errors: {}
        };
        this.onSubmitClick = this.onSubmitClick.bind(this);
        this.onChangeUpdate = this.onChangeUpdate.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    onChangeUpdate(field){
        return e => {
            this.setState({
                [field]: e.currentTarget.value
            })
        }
    }

    onSubmitClick(e) {
        e.preventDefault();
        const { companyName, position, stage, applicationLink, salary, location, deadline, dateApplied, interviewDate, decisionDate, decision, notes, networkContacts, studyPrep } = this.state;
        this.props.composeJob({
            company_name: companyName,
            position_name: position,
            stage: stage,
            application_link: applicationLink,
            salary: salary,
            location: location,
            deadline: deadline,
            date_applied: dateApplied,
            interview_date: interviewDate,
            decision_date: decisionDate,
            decision: decision,
            notes: notes,
            networking_contacts: networkContacts,
            studying_preparation: studyPrep
        }).then(() => {
            this.props.fetchUserJobs(this.props.currentUserId);
            this.props.closeModal();
        });
    }

    renderErrors() {
        return (
            <ul className="login-errors">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ errors: nextProps.errors })
    }

    render() {
        const { companyName, position, stage, applicationLink, salary, location, deadline, dateApplied, interviewDate, decisionDate, decision, notes, networkContacts, studyPrep } = this.state;
        return (
            <form className='job-index'>
                {Object.keys(this.state.errors).length > 0 ? this.renderErrors() : null}

                <div className='job-index-top'>
                    <ul className='job-index-top-left'>
                        <li className='li-details'>
                            <p className='li-title'>Company Name:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('companyName')}
                                placeholder="Company Name *"
                                type="text"
                                value={companyName}
                                required
                            />
                        </li >
                        <li className='li-details'>
                            <p className='li-title'>Position Name:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('position')}
                                placeholder="Position *"
                                type="text"
                                value={position}
                                required
                            />
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Stage:</p>
                            <div className="landing-menu-container li-field">
                                <input
                                    className="li-field-dropdown"
                                    onChange={this.onChangeUpdate('stage')}
                                    placeholder="Stage *"
                                    type="text"
                                    value={stage}
                                    required
                                />
                                <div className="landing-menu-dropdown">
                                    <div className="landing-menu-row" onClick={e => this.setState({ stage: 'wishlist' })}>Wishlist</div>
                                    <div className="landing-menu-row" onClick={e => this.setState({ stage: 'applied' })}>Applied</div>
                                    <div className="landing-menu-row" onClick={e => this.setState({ stage: 'interviewing' })}>Interview</div>
                                    <div className="landing-menu-row" onClick={e => this.setState({ stage: 'decision' })}>Decision</div>
                                </div>
                            </div>
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Application Link:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('applicationLink')}
                                placeholder="Application Link *"
                                type="text"
                                value={applicationLink}
                                
                            />
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Salary:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('salary')}
                                placeholder="Salary"
                                type="text"
                                value={salary}
                                
                            />
                        </li>
                        <li className='li-details'>
                            <p className='li-title'>Location:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('location')}
                                placeholder="Location"
                                type="text"
                                value={location}
                                
                            />
                        </li>
                    </ul>
                    <ul className='job-index-top-right'>
                        <li className='li-details'>
                            <p className='li-title'>Deadline:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('deadline')}
                                placeholder="Application Deadline"
                                type="text"
                                value={deadline}
                                
                            />
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Applied On:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('dateApplied')}
                                placeholder="Applied On"
                                type="text"
                                value={dateApplied}
                                
                            />
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Interview:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('interviewDate')}
                                placeholder="Interview On"
                                type="text"
                                value={interviewDate}
                                
                            />
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Heard back:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('decisionDate')}
                                placeholder="Heard Back On"
                                type="text"
                                value={decisionDate}
                                
                            />
                        </li>

                        <li className='li-details'>
                            <p className='li-title'>Decision:</p>
                            <input
                                className="li-field"
                                onChange={this.onChangeUpdate('decision')}
                                placeholder="Offer? :)"
                                type="text"
                                value={decision}
                                
                            />
                        </li>
                    </ul>
                </div>
                <ul className='job-index-bottom'>
                    <li className='li-textbox'>
                        <p className='li-title'>Notes:</p>
                        <textarea
                            className="li-textfield"
                            onChange={this.onChangeUpdate('notes')}
                            placeholder="Notes"
                            type="text"
                            value={notes}
                            >
                        </textarea>
                    </li>
                    <li className='li-textbox'>
                        <p className='li-title'>Network Contacts:</p>
                        <textarea
                            className="li-textfield"
                            onChange={this.onChangeUpdate('networkContacts')}
                            placeholder="Networking Notes"
                            type="text"
                            value={networkContacts}
                            >
                        </textarea>
                    </li>
                    <li className='li-textbox'>
                        <p className='li-title'>Study Prep:</p>
                        <textarea
                            className="li-textfield"
                            onChange={this.onChangeUpdate('studyPrep')}
                            placeholder="Study Prep Notes"
                            type="text"
                            value={studyPrep}
                            >
                        </textarea>
                    </li>
                </ul>
                <button className="sign-button" type="submit" onClick={this.onSubmitClick}>Create Job</button>
            </form>


        );
    }
}

export default LandingCreateJob;