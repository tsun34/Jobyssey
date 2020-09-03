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
            category: '',
            applicationLink: '',
        };
        this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
        this.onPositionChange = this.onPositionChange.bind(this);
        this.onApplicationLinkChange = this.onApplicationLinkChange.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    onCompanyNameChange(e) {
        e.preventDefault();
        this.setState({companyName: e.currentTarget.value});
    }

    onPositionChange(e) {
        e.preventDefault();
        this.setState({position: e.currentTarget.value});
    }

    onApplicationLinkChange(e) {
        e.preventDefault();
        this.setState({applicationLink: e.currentTarget.value});
    }

    onSubmitClick(e) {
        e.preventDefault();
        const { companyName, position, category, applicationLink } = this.state;
        this.props.composeJob({
            company_name: companyName,
            position_name: position,
            stage: category,
            application_link: applicationLink,
        }).then(() => this.props.closeModal());
    }

    render() {
        const { companyName, position, category, applicationLink } = this.state;
        console.log(this.props);
        return (
            <div className="sign-container">
                <form className="sign-form">
                    <input
                        className="create-job-input"
                        onChange={this.onCompanyNameChange}
                        placeholder="Company Name *"
                        type="text"
                        value={companyName}
                        required
                     />
                    <input
                        className="create-job-input"
                        onChange={this.onPositionChange}
                        placeholder="Position *"
                        type="text"
                        value={position}
                        required
                    />
                    <input
                        className="create-job-input"
                        onChange={this.onApplicationLinkChange}
                        placeholder="Application Link *"
                        type="text"
                        value={applicationLink}
                        required
                    />
                    <div className="landing-menu-container">
                        <input
                            className="create-job-input"
                            placeholder="Category *"
                            type="text"
                            value={category}
                            required
                        />
                        <div className="landing-menu-dropdown">
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'wishlist'})}>Wishlist</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'applied'})}>Applied</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'interview'})}>Interview</div>
                            <div className="landing-menu-row" onClick={e => this.setState({category: 'offer'})}>Offer</div>
                        </div>
                    </div>
                    <button className="sign-button" onClick={this.onSubmitClick} type="submit">Create Job</button>
                </form>
            </div>
        );
    }
}

export default LandingCreateJob;